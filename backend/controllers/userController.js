import User from "../models/userModel.js";

// Login user
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
}

// Signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export { loginUser, signupUser };