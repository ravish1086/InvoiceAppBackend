import { Invoice } from "../models/invoice.model.js";

const getAllInvoices = async (req,res) =>{
    try{
        console.log(req.createdBy)
        let allInvoices = await Invoice.find({createdBy: req.createdBy});
        res.status(200).json(allInvoices);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const getInvoiceById = async (req,res) =>{
    try{
        let queryParams = req.query;
        let invoice = await Invoice.find({_id:queryParams.invoiceId});
        res.status(200).json(invoice[0]);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}



const createNewInvoice = async (req, res)=>{
    try{
        let createdInvoice = await Invoice.create(req.body);
        res.status(201).json(createdInvoice);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateInvoice = async (req, res)=>{
    try{
        let createdInvoice = await Invoice.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json(createdInvoice);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteInvoice = async (req, res)=>{
    try{
        let deletedInvoice = await Invoice.findOneAndDelete(req.body._id);
        res.status(200).json(deletedInvoice);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


export {getAllInvoices, createNewInvoice, updateInvoice, deleteInvoice, getInvoiceById};