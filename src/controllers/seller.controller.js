import {Seller} from '../models/seller.model.js';


const getAllSellers = async (req,res)=>{
    try{
        let sellers = await Seller.find({});
        if(!sellers){
            return res.status(400).json({message: 'No Records Retrieved'});
        }
        return res.status(200).json(sellers)
    }
    catch(error){;
        res.status(500).json({message : 'Unable to fetch records from Database server'})
    }
}

const saveSellerDetails = async (req,res)=>{
    try{
        let seller = await Seller.create(req.body);
        if(!seller){
            res.status(400).json({message:"Unable to save seller details"});
        }
        res.status(200).json(seller);
    }
    catch(error){
        res.send(500).json({message: error.message})
    }
}

const updateSellerDetails = async (req,res)=>{
    try{
        let seller = await Seller.findByIdAndUpdate(req.body._id,req.body);
        if(!seller){
            res.status(400).json({message:"Unable to find seller with the Input Seller ID"});
        }
        res.status(200).json(seller);
    }
    catch(error){
        res.send(500).json({message: error.message})
    }
}

const deleteSellerDetails = async (req,res)=>{
    try{
        let seller = await Seller.findByIdAndDelete(req.body._id);
        if(!seller){
            res.status(400).json({message:"Unable to find seller with the Input Seller ID"});
        }
        res.status(200).json(seller);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export {getAllSellers, updateSellerDetails, saveSellerDetails, deleteSellerDetails};