import { Payment } from "../models/payment.model.js";

const getAllPaymentDetails = async (req, res)=> {
        try{
            let paymentDetails = await Payment.find({isActive:1});
            return res.status(200).json(paymentDetails);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
}


const savePaymentDetails = async (req,res) => {
    try{
        let savedDetails = await Payment.create(req.body);
        if(!savedDetails){
            return res.status(400).json({message: 'Unable to save payment details'});
        }
    
        return res.status(201).json({message: 'Payment details has been saved successfully', data:savedDetails});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong while saving the details'});
    }
}

const updatePaymentDetails = async (req,res) => {
    try{
        let savedDetails = await Payment.findByIdAndUpdate(req.body._id,req.body);
        if(!savedDetails){
            return res.status(400).json({message: 'Unable to update payment details'});
        }
    
        return res.status(201).json({message: 'Payment details has been updated successfully', data:savedDetails});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong while updating the payment details'});
    }
}

const deletePaymentDetails = async (req,res) => {
    try{
        let updatedReq = req.body;
        updatedReq.isActive = 0;
        let deletedPaymentItem = await Payment.findByIdAndUpdate(req.body._id, updatedReq);
        if(!deletedPaymentItem){
            return res.status(400).json({message: 'Unable to Delete payment details'});
        }
    
        return res.status(200).json({message: 'Payment details has been deleted successfully', data:deletedPaymentItem});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong while deleting the details'});
    }
}
export {getAllPaymentDetails, savePaymentDetails, updatePaymentDetails, deletePaymentDetails};