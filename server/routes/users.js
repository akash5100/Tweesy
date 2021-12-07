import express from "express";
import { signin, signup } from "../controller/user.js";

const router = express.Router();

router.post("/signin");
router.post("/signup");

export default router;
