import express from "express";
import { Customer } from "../models/customer.model.js";
import { getAllCustomers, importCustomerData } from "../controllers/customer.controller.js";
import { saveCustomerDetails } from "../controllers/customer.controller.js";
import { updateCustomerDetails } from "../controllers/customer.controller.js";
import { deleteCustomerDetails } from "../controllers/customer.controller.js";
import { excelReader } from "../middlewares/excelreader.middleware.js";
import multer from 'multer'

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router(); 

router.route("/getAllCustomers").get(getAllCustomers);
router.route("/saveCustomer").post(saveCustomerDetails);
router.route("/updateCustomer").patch(updateCustomerDetails);
router.route("/deleteCustomerDetails").delete(deleteCustomerDetails);
router.route("/importCustomersFromExcel").post( upload.single('file'), excelReader,importCustomerData)

export default router;