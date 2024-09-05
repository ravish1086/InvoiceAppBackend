import { User } from "../models/user.model.js";

const insertUser = async (req,res)=> {
    try{
        let insertedUser = await User.create(req.body);

        if(!insertedUser){
            res.status(400).json({message:'Bad Request'})
        }
    
        res.status(201).json(insertedUser);
    
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
 }

const getAllUsers = async (req,res)=> {
    try{
        let users = await User.find({});

        return res.status(200).json(users);
    }
    catch(error){
        return res.status(500).json({message:error.message});

    }
}

const getUserById = async (req,res)=> {
    try{
        let userGstIn = req.query.gstIn;
        let user = await User.find({companyGSTIN: userGstIn});

        return res.status(200).json(user[0]);
    }
    catch(error){
        return res.status(500).json({message:error.message});

    }
}

const updateUser = async (req,res)=> {
    try{
        let updatedUser = await User.findByIdAndUpdate(req.body._id, req.body);

        if(!updatedUser){
            res.status(400).json({message:'Unable to update User'})
        }
    
        res.status(201).json(updatedUser);
    
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
 }

 const deleteUser = async (req,res)=> {
    try{
        let userToDelete = req.body;
        userToDelete.isActive = 0;
        let deletedUser = await User.findByIdAndDelete(req.body._id, userToDelete);

        if(!deletedUser){
            res.status(400).json({message:'Unable to update User'})
        }
    
        res.status(200).json(deletedUser);
    
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
 }
 export  {insertUser, getAllUsers, updateUser, deleteUser, getUserById};
 