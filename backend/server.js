import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';

// Routes import
import workoutRoutes from './routes/workouts.js'
import userRoutes from './routes/users.js'

// Load env variables
dotenv.config();

// Create new express app
const app = express();

// Middleware (log request when comming in)
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen to Port  
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.error(error);
  })