import User from "../models/User.js";

export const overview = async (req, res) => {
  const users = await User.countDocuments();
  res.json({ users });
};
