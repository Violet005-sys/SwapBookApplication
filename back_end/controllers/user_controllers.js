const User = require('../models/user');
const Book = require('../models/book');
const myBook = require('../models/myBooks');

const deleteUser = async(req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);

        if(!user) res.send({'error': 'User not found'}).status(404);

        res.send({'success': `User ${user} deleted successfully`}).status(200);
    } catch (error) {
        res.send({'error': error.message}).status(500)
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await User.find({});

        if(!users) res.send(`No users exist`).status(404);

        res.send(users).status(200);
    } catch (error) {
        res.send({'error': error.message}).status(500)
    }
}

const getUser = async(req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if(!user) res.send({'error': 'User not found'}).status(404);

        res.send(user).status(200);
    } catch (error) {
        res.send({'error': error.message}).status(500)
    }
}

const updateUser = async(req, res) => {
    const { id } = req.params;
    const userData = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {... userData}, {new: true});

        if(!user) res.send({'error': 'User not found'}).status(404);

        res.send(user).status(200);
    } catch (error) {
        res.send({'error': error.message}).status(500);
    }
}

//adding to myBooks
  //get userId
  //check if book exists
  //check if user exists
  //add book to user's myBooks array
  //save user
  //if theres an error, send a message to the user
  const addToMyBooks = async(req, res) => {
    const { bookId } = req.body

    try {
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).send('Book not found');

        const collection = await myBook.create({
            book: bookId,
            user: req.user.id
        });

        if (!collection) return res.status(404).send({'role': 'Error adding book to collection'});

        res.status(200).send(collection)
    } catch (error) {
        res.status(500).send(error.message);
    }

  };

const getMyBooks = async(req, res) => {
    try {
        const myBooks = await myBook.find({}).populate('book');
        res.status(200).send(myBooks);
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message);
    }
}

module.exports = { updateUser, getUser, getUsers, deleteUser, addToMyBooks, getMyBooks};