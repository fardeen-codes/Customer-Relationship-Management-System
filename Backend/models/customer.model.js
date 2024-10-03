import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    status: {
        type: String,
        default: 'Not Started'
    }
}, { 
    timestamps: true 
})

export default mongoose.model('Customer', customerSchema)