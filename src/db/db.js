import mongoose from "mongoose";
import dotenv from 'dotenv';
import { DB_NAME } from "../../constant.js";

const connectDB = async ()=> {
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI+"/"+DB_NAME);
        if(connectionInstance){
            console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        }
        else{
            console.log("Some problem occurred while connecting with the database")
        }
    }
    catch(error){
        console.log(error);
    }
    
} 

export default connectDB