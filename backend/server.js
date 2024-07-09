import express from 'express'
import dotenv from 'dotenv'

// Load env variables
dotenv.config();

// Create new express app
const app = express();

// Middleware (log request when comming in)
app.use((res, req, next) => {
  console.log(req.path, req.method);
  next();
})

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
})


// Listen to Port  
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000.");
})