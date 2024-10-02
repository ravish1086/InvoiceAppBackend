import mongoose from "mongoose";

const invoiceConfigSchema = new mongoose.Schema({
    "invoiceNumber" : {
        type: "String"
    }
},
{timestamps:true})

export const Invoiceconfig =  mongoose.model("Invoiceconfig", invoiceConfigSchema)