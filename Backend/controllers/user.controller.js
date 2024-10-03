import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createError} from '../error.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
    try {
        //check for already exist
        const em = await User.findOne({email: req.body.email});
        if(em) {
            return res.status(409).json({
                message: 'user already exists'
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password:hash
        })

        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return res.status(404).json({
                message: 'user not found'
            })
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordMatch){
            return res.status(401).json({
                message: 'invalid credentials'
            })
        }

        const token = jwt.sign(
            {id: user._id, isAdmin: user._isAdmin},
            process.env.JWT_SECRET
        )

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({
            details: {
                ...otherDetails
            }, isAdmin})
    } catch (error) {
        next(error)
    }
}