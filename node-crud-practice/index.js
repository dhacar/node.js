const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' }
];

// Routes will go here

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});




// Get all books 
app.get('/books', (req, res) => {
  res.json(books);
});


// get one book
app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
});

// Create a new book  
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title & author required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


// Update a book  
app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = title;

  res.json(book);
});
  

// Delete a book  
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const exists = books.some(b => b.id === id);

  if (!exists) return res.status(404).json({ message: "Book not found" });

  books = books.filter(b => b.id !== id);

  res.json({ message: "Book deleted" });
});
