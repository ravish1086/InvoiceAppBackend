import express from "express";
import {getAllInvoices, getInvoiceById} from "../controllers/invoice.controller.js"; 
import { createNewInvoice } from "../controllers/invoice.controller.js";
import { updateInvoice } from "../controllers/invoice.controller.js";
import { deleteInvoice } from "../controllers/invoice.controller.js";
import { getLastInvoiceNumber } from "../controllers/invoice.controller.js";
import { setLastInvoiceNumber } from "../controllers/invoice.controller.js";

const router = express.Router();


router.route('/getAllInvoices').get(getAllInvoices);

router.route('/createInvoice').post(createNewInvoice);

router.route('/updateInvoice').patch(updateInvoice);

router.route('/deleteInvoice').delete(deleteInvoice);

router.route('/getInvoiceById').get(getInvoiceById);

router.route('/getLastInvoiceNumber').get(getLastInvoiceNumber);

router.route('/setLastInvoiceNumber').post(setLastInvoiceNumber);

export default router;