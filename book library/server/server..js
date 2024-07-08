
const express = require('express');
const mongoose = require('mongoose');
const librarydb = require('./models/databse.js');
const cors = require('cors');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1/LibraryDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json()); // Middleware for parsing JSON in POST requests

// Initialize database with book data
const bookData = require('./books.json');

const initializeDatabase = async () => {
    try {
        await librarydb.deleteMany({});
        await librarydb.insertMany(bookData);
        console.log('Database initialized successfully.');
    } catch (err) {
        console.error('Error initializing database:', err);
    }
};
initializeDatabase();

// Get all books
app.get('/getmovies', async (req, res) => {
  try {
    const books = await librarydb.find();
    res.json(books);
  } catch (error) {
    res.json({ message: error.message });
  }
});


app.get('/getmovies/:bookId', async (req, res) => {
    try {
        const {bookId} = req.params
        const book = await librarydb.findOne({bookId : bookId});
        if (book) {
            res.json(book);
        } else {
            res.json({ message: 'Book not found' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
});

// Buy a book (update availability)
app.post('/buy/:bookId', async (req, res) => {
  const { bookId } = req.params;

  try {
    const book = await librarydb.findOne({ bookId });

    if (!book) {
      return res.json({ success: false, message: 'Book not found' });
    }

    if (!book.isAvailable) {
      return res.json({ success: false, message: 'Book is not available' });
    }

    book.isAvailable = false;
    await book.save();
    res.json({ success: true });
    
  } 
  catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
