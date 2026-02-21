import express, { Router } from "express";
import { handleSignUpController } from "../controllers/signup.controllers.js";

const router = express.Router()

router.post("/signupuser", handleSignUpController);

export default router;