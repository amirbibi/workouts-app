import { isValidObjectId } from "mongoose";
import Workout from "../models/workoutModel.js"

// GET all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: `ObjectId is not valid` });
  }

  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: `Workout with ID ${id} not found` });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// CREATE new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // Add document to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ msg: "POST single" });
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: `ObjectId is not valid` });
  }

  try {
    const workout = await Workout.findByIdAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).json({ error: `Workout with ID ${id} not found` });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: `ObjectId is not valid` });
  }

  try {
    const workout = await Workout.findByIdAndUpdate({ _id: id }, {
      ...req.body
    });

    if (!workout) {
      return res.status(404).json({ error: `Workout with ID ${id} not found` });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


export { createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout };