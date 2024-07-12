import { Router } from "express"
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkout, updateWorkout } from "../controllers/workoutController.js"
import requireAuth from "../middlewares/requireAuth.js";

const router = Router();

// Require auth for all routes
router.use(requireAuth);

// GET all
router.get("/", getAllWorkouts);

// GET single
router.get("/:id", getWorkout);

// POST
router.post("/", createWorkout);

// DELETE
router.delete("/:id", deleteWorkout);

// UPDATE
router.patch("/:id", updateWorkout);

export default router;