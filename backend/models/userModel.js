import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
})

// Static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email }); // check if User.exists({email})

  // Validations
  if (!password || !email) {
    throw new Error('Email and Password are required');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Email is not valid');
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Password is not strong enough');
  }

  if (exists) {
    throw new Error('User with this email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
}

userSchema.statics.login = async function (email, password) {

  if (!password || !email) {
    throw new Error('Email and Password are required');
  }

  const user = await this.findOne({ email });

  // if user not found or password is incorrect
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  return user;
}

export default model('User', userSchema)