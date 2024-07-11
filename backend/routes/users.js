import { Router } from "express"

// Controller functions
import { loginUser, signupUser } from "../controllers/userController.js"

const router = Router();

// Login route
router.post("/login", loginUser);

// Signup route
router.post("/signup", signupUser);

export default router;