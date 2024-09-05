import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
      productName:{
        type: "String",
        require:true,
        unique:true
    },
    productHsn:{
        type: "Number"
    },
    productPrice:{
        type: "Number"
    },
    productTaxRate:{
        type: "Number"
    },
    productUnit:{
        type: "String"
    },
    inStock:{
        type:"Number"
    },
    id:{
        type:"Number",
        unique:true
    }
})


export const Product = mongoose.model("Product",productSchema);

