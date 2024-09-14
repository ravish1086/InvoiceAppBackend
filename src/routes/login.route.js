import express from "express";
import { authenticateUser } from "../controllers/authenticateUser.controller.js";

const router = express.Router();

router.route("/login").post(authenticateUser);

export default router;