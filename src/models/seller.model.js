import mongoose from "mongoose";
import { buyerSellerSchema } from "./buyerSeller.schema.js";


const sellerSchema  = new mongoose.Schema(buyerSellerSchema,
    {timestamps:true});


export const Seller  = mongoose.model("Seller", sellerSchema)