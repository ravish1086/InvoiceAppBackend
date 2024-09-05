import mongoose from "mongoose";
import { buyerSellerSchema } from "./buyerSeller.schema.js";


const sellerSchema  = new mongoose.Schema(buyerSellerSchema);


export const Seller  = mongoose.model("Seller", sellerSchema)