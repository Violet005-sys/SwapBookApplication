const Book = require("../models/book");
const User = require("../models/user");

//get details of book from req.body
//check if book title already exists
//if it does inform the user
//if it doesnt, create book
//create book
//save book
//if theres an error, send a message to the user

const createBook = async (req, res) => {
  const {
    title,
    author,
    genre,
    description,
    rating,
    personalComments,
    statusOfBook,
    stateOfBook,
    image,
  } = req.body;

  console.log(req.file);

  const id = req.user.id;
  try {
    const user = await User.findById(id); // Validate userId
    if (!user) return res.status(404).send("User not found");

    const book = new Book({
      creator: id,
      title: title,
      author: author,
      genre: genre,
      description: description,
      rating: rating,
      personalComments: personalComments,
      statusOfBook: statusOfBook,
      stateOfBook: stateOfBook,
      image: image,
      file: req.file.filename,
    });

    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
};

const createManyBooks = async (req, res) => {
  const booksData = req.body;
  try {
    //gets id of all users
    const booksWithUser = booksData.map((book) => ({
      ...book,
      creator: req.user.id,
    }));

    const books = await Book.insertMany(booksWithUser);


    if (!books)
      return res.send({ message: "Books could not be inserted" }).status(404);

    return res.send(books).status(201);
  } catch (error) {
    res.send(error.message).status(500);
  }
};

const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ error: "Book not found" });
    }
    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).populate("creator");

    res.status(200).send({ count: books.length, books: books });
  } catch (error) {
    res.send({ error: error.message }).status(500);
  }
};
//try catch block
//get id of book and data from body
//find book by id and update
//if not found , return error message
//catch errors

const updateBook = async (req, res) => {
  const { id } = req.params.id;
  //gets updated fields from body
  const updateFields = req.body;

  try {
    const existingBook = await Book.findById(id);
    if (!existingBook) {
      return res.status(404).send({ error: "Book not found" });
    }

    const book = await Book.findByIdAndUpdate(
      id,
      //changes data that is provided only
      { $set: updateFields },
      { new: true }
    );

    res.status(200).send(book);
  } catch (error) {
    res.send({ error: error.message }).status(500);
  }
};

// use try catch block
//look for book using id
// if not there send error
//use findbyid and delete

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book)
      return res.status(404).send({ message: `Book with id ${id} not found` });

    res.send({ message: `Book with id ${id} deleted` }).status(200);
  } catch (error) {
    res.send({ error: error.message }).status(500);
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    const result = await Book.deleteMany();
    console.log(`Deleted ${result.deletedCount} books.`); // Log the number of deleted books

    return res.status(204).send(); // No content to return after deletion
  } catch (error) {
    console.error("Error deleting books:", error); // More descriptive error logging
    return res.status(500).send({ error: error.message });
  }
};

const bookAdded = async (req, res) => {

  const id = req.user.id;
  try {
    const books = await Book.find({ creator: id });
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  createManyBooks,
  deleteAllBooks,
  bookAdded
};
