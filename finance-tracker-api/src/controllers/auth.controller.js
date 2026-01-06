import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ token: generateToken(user._id), user });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password)))
    return res.status(400).json({ message: "Invalid credentials" });

  res.json({ token: generateToken(user._id), user });
};

export const profile = async (req, res) => {
  res.json(req.user);
};
