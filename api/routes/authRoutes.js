import express from "express";
import { signup } from "../controlllers/authController.js";
import { signin } from "../controlllers/authController.js";
import { google } from "../controlllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
