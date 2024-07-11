import User from "../models/userModel.js";


// Login user
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
}

// Signup user
const signupUser = (req, res) => {
  res.json({ message: "Signup User" });
}

export { loginUser, signupUser };