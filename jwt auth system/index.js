import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(6000, () => {
  console.log("Server running on port 6000");
});
