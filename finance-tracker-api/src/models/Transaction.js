import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: String,
  category: String,
  date: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Transaction", schema);
