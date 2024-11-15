import express from "express";
const router = express.Router();
import { createUser } from "../controller/userController.js";
router.post('/signup',createUser)
export default router;

