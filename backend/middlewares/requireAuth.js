import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    // Ensures user exists in db
    req.user = await User.findById(_id).select('_id');

    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: 'Request is not authorized' });
  }
}

export default requireAuth;
