// import customerSchema from "../models/customer.model.js";
import Customer from '../models/customer.model.js';

// create a new customer
export const createCustomer = async (req, res, next) => {
    const newCustomer= new Customer(req.body);

    try {
        const savedCustoemr = await newCustomer.save();
        res.status(200).json(savedCustoemr);
    } catch (error) {
        next (error);
    }
}

//delete a customer
export const deleteCustomer = async (req, res, next) =>{
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if(!deletedCustomer) {
            return res.status(404).json({
                message: 'user not found',
            })
        }
        res.status(200).json({
            message: 'customer deleted successfully',
            customer: deletedCustomer
        })
    } catch (error) {
        next(error);
    }
}

// get customers
export const getCustomers = async (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);
    try {
        const customers = await Customer.find({company:userId});
        // .populate('company');
        return res.status(200).json(customers);
    } catch (error) {
        next(error);
    }
}

// update customer
export const updateCustomer = async (req, res, next) => {
    try {
        const customer = await Customer.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(customer);
    } catch (error) {
        next (error)
    }
}

//get all customers
export const getAllCustomers = async (req, res, next) => {
    try {
        const allCustomers = await Customer.find();
        res.status(200).json(allCustomers);
    } catch (error) {
        next(error);
    }
}