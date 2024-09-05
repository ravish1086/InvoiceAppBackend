import express from "express";
import { getAllPaymentDetails } from "../controllers/payment.controller.js";
import { savePaymentDetails } from "../controllers/payment.controller.js";
import { updatePaymentDetails } from "../controllers/payment.controller.js";
import { deletePaymentDetails } from "../controllers/payment.controller.js";
const router = express.Router();

router.route('/getAllPaymentDetails').get(getAllPaymentDetails);
router.route('/savePaymentDetails').post(savePaymentDetails);
router.route('/updatePaymentDetails').patch(updatePaymentDetails);
router.route('/deletePaymentDetails').delete(deletePaymentDetails);



export default router;