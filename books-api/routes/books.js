const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook
} = require("../controllers/booksController");

router.post("/", createBook);       // Create
router.get("/", getBooks);          // Read all
router.get("/:id", getBook);        // Read one
router.put("/:id", updateBook);     // Update
router.delete("/:id", deleteBook);  // Delete

module.exports = router;
