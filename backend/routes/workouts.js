import express from "express"
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkout, updateWorkout } from "../controllers/workoutController.js"

const router = express.Router();

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
