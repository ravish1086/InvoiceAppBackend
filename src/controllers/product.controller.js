import { Product } from "../models/product.model.js";

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await Product.find({});
        return res.status(200).json(allProducts);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addProduct = async (req, res) => {
    try {
        let addedProduct = await Product.create(req.body);
        if (!addedProduct) {
            return res.status(400).json({ message: '"Bad Request' });
        }

        return res.status(201).json(addedProduct);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        let updatedProduct = await Product.findByIdAndUpdate(req.body._id, req.body);
        if (!updatedProduct) {
            return res.status(400).json({ message: 'Unable to update Product' });
        }

        return res.status(200).json(updatedProduct);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        let reqObj = req.body;
        reqObj.isActive = 0;
        let deletedProduct = await Product.findByIdAndDelete(req.body._id, reqObj);
        if (!deletedProduct) {
            return res.status(400).json({ message: 'Unable to Delete Product' });
        }

        return res.status(201).json(deletedProduct);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export { getAllProducts, addProduct, deleteProduct, updateProduct };