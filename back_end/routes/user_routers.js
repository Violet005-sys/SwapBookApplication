const express = require('express');
const router = express.Router();

const { getUser, getUsers, updateUser, deleteUser, addToMyBooks, getMyBooks } = require('../controllers/user_controllers');

router.get('/', getUsers);
router.get('/collections', getMyBooks);
router.get('/:id', getUser);
router.post('/collection', addToMyBooks);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;