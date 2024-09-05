import express from "express";
import { Customer } from "../models/customer.model.js";
import { getAllCustomers } from "../controllers/customer.controller.js";
import { saveCustomerDetails } from "../controllers/customer.controller.js";
import { updateCustomerDetails } from "../controllers/customer.controller.js";
import { deleteCustomerDetails } from "../controllers/customer.controller.js";

const router = express.Router();

router.route("/getAllCustomers").get(getAllCustomers);
router.route("/saveCustomer").post(saveCustomerDetails);
router.route("/updateCustomer").patch(updateCustomerDetails);
router.route("/deleteCustomerDetails").delete(deleteCustomerDetails);

export default router;