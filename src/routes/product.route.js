import express from "express";
import {getAllProducts, addProduct} from "../controllers/product.controller.js";
import { deleteProduct } from "../controllers/product.controller.js";
import { updateProduct } from "../controllers/product.controller.js";
const router = express.Router();


router.route("/getAllProducts").get(getAllProducts);

router.route("/addProduct").post(addProduct);

router.route("/updateProduct").post(updateProduct);

router.route("/deleteProduct").post(deleteProduct);

export default router;