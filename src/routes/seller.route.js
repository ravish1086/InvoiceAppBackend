import express from "express";
import { Seller } from "../models/seller.model.js";
import { getAllSellers } from "../controllers/seller.controller.js";
import { saveSellerDetails } from "../controllers/seller.controller.js";
import { updateSellerDetails } from "../controllers/seller.controller.js";
import { deleteSellerDetails } from "../controllers/seller.controller.js";

const router = express.Router();

router.route("/getAllSellers").get(getAllSellers);
router.route("/saveSeller").post(saveSellerDetails);
router.route("/updateSeller").patch(updateSellerDetails);
router.route("/deleteSellerDetails").delete(deleteSellerDetails);

export default router;