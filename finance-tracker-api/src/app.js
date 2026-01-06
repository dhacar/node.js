import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import { swaggerDocs } from "./config/swagger.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Finance Tracker API running" });
});

app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/upload", uploadRoutes);
app.use("/admin", adminRoutes);

swaggerDocs(app);

app.use(errorHandler);

export default app;
