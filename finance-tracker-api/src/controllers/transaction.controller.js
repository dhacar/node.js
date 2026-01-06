import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  const tx = await Transaction.create({ ...req.body, user: req.user._id });
  res.status(201).json(tx);
};

export const getTransactions = async (req, res) => {
  const tx = await Transaction.find({ user: req.user._id });
  res.json(tx);
};
