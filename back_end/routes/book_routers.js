const express = require('express');
const router = express.Router();
const { upload } = require('../utils/fileHandler');


const { getBook, getBooks, createBook, createManyBooks, updateBook, deleteBook, deleteAllBooks, bookAdded} = require('../controllers/book_controllers');


router.get('/books-added', bookAdded);
router.get('/', getBooks);
router.delete('/delete', deleteAllBooks);
router.get('/:id', getBook);
router.post('/', upload.single("file"), createBook);
router.post('/create-many', createManyBooks);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);


module.exports = router;