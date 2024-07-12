import { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model('Workout', workoutSchema)