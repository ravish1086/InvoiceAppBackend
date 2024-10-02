import mongoose from "mongoose";
import { buyerSellerSchema } from "./buyerSeller.schema.js";


const customerSchema  = new mongoose.Schema(buyerSellerSchema,
    {timestamps:true});


export const Customer  = mongoose.model("Customer", customerSchema)