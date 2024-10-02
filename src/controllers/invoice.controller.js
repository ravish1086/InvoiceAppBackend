import { Invoice } from "../models/invoice.model.js";
import { Invoiceconfig } from "../models/invoiceConfig.model.js"

const getAllInvoices = async (req,res) =>{
    try{
        
        let allInvoices = await Invoice.find({createdBy: req.createdBy}).sort({invoiceNo:1});
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
        let reqJson = req.body;
        reqJson.isActive = 1;
        let createdInvoice = await Invoice.create(reqJson);
        let invoice = await Invoice.find({invoiceNo: reqJson.invoiceNo})
        res.status(201).json(invoice[0]);
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

const setLastInvoiceNumber = async (req, res) => {
    try{
        let lastInvoiceNumber = await Invoiceconfig.findByIdAndUpdate(req.body._id, req.body)

        if(lastInvoiceNumber){
            res.status(200).json({message: "Success", status:true});
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

}

const getLastInvoiceNumber = async (req, res) => {
    try{
        let lastInvoiceNumber = await Invoiceconfig.find({});

        if(lastInvoiceNumber){
            res.status(200).json(lastInvoiceNumber[0]);
        }
        else{
            res.status(200).json(lastInvoiceNumber);

        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

}

export {getAllInvoices, createNewInvoice, updateInvoice, deleteInvoice, getInvoiceById, setLastInvoiceNumber, getLastInvoiceNumber};