import {Customer} from '../models/customer.model.js';


const getAllCustomers = async (req,res)=>{
    try{
        let customers = await Customer.find({});
        if(!customers){
            return res.status(400).json({message: 'No Records Retrieved'});
        }
        return res.status(200).json(customers)
    }
    catch(error){;
        res.status(500).json({message : 'Unable to fetch records from Database server'})
    }
}

const saveCustomerDetails = async (req,res)=>{
    try{
        let customer = await Customer.create(req.body);
        if(!customer){
            res.status(400).json({message:"Unable to save customer details"});
        }
        res.status(200).json(customer);
    }
    catch(error){
        res.send(500).json({message: error.message})
    }
}

const updateCustomerDetails = async (req,res)=>{
    try{
        let customer = await Customer.findByIdAndUpdate(req.body._id,req.body);
        if(!customer){
            res.status(400).json({message:"Unable to find customer with the Input Customer ID"});
        }
        res.status(200).json(customer);
    }
    catch(error){
        res.send(500).json({message: error.message})
    }
}

const deleteCustomerDetails = async (req,res)=>{
    try{
        let customer = await Customer.findByIdAndDelete(req.body._id);
        if(!customer){
            res.status(400).json({message:"Unable to find customer with the Input Customer ID"});
        }
        res.status(200).json(customer);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export {getAllCustomers, updateCustomerDetails, saveCustomerDetails, deleteCustomerDetails};