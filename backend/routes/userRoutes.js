import express from "express";
const router = express.Router();
import { createUser, loginUser,getAllUsers } from "../controller/userController.js";
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get('/getalluser',getAllUsers)
export default router;
