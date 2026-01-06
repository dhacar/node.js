import express from "express";
import multer from "multer";
import auth from "../middlewares/auth.middleware.js";
import { uploadProfile } from "../controllers/upload.controller.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/profile-picture", auth, upload.single("image"), uploadProfile);

export default router;
