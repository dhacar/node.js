require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to read JSON body
app.use(express.json());

// Import routes
const bookRoutes = require("./routes/books");
app.use("/books", bookRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("❌ DB Error:", err));
