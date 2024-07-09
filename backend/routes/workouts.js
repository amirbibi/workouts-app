import express from "express"
import Workout from "../models/workoutModel.js"

const router = express.Router();

// GET all
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
})

// GET single
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single" });
})

// POST
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ msg: "POST single" });
})

// DELETE
router.delete("/", (req, res) => {
  res.json({ msg: "DELETE single" });
})

// UPDATE
router.patch("/", (req, res) => {
  res.json({ msg: "UPDATE single" });
})

export default router;