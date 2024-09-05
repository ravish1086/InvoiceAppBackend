import mongoose from "mongoose";
import { buyerSellerSchema } from "./buyerSeller.schema.js";


const customerSchema  = new mongoose.Schema(buyerSellerSchema);


export const Customer  = mongoose.model("Customer", customerSchema)