import express from "express"

// Controller functions
import { loginUser, signupUser } from "../controllers/userController.js"

const router = express.Router();

// Login route
router.post("/login", loginUser);

// Signup route
router.post("/signup", signupUser);

export default router;