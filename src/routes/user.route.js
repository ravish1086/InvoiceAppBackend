import express from "express";
import {insertUser, getAllUsers, deleteUser, updateUser, getUserById} from "../controllers/user.controller.js"

const router = express.Router();


router.route("/addUser").post(insertUser);
router.route("/getAllUsers").get(getAllUsers);
router.route("/getUserById").get(getUserById);
router.route("/updateUser").get(updateUser);
router.route("/deleteUser").get(deleteUser);

export default router;