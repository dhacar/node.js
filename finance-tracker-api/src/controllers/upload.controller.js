import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";

export const uploadProfile = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  req.user.profilePicture = result.secure_url;
  await req.user.save();

  res.json(req.user);
};
