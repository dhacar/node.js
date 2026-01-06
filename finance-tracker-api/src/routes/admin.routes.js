import express from "express";
import auth from "../middlewares/auth.middleware.js";
import role from "../middlewares/role.middleware.js";
import { overview } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/overview", auth, role("admin"), overview);

export default router;
