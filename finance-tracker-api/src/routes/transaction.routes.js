import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { createTransaction, getTransactions } from "../controllers/transaction.controller.js";

const router = express.Router();

router.use(auth);
router.post("/", createTransaction);
router.get("/", getTransactions);

export default router;
