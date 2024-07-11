const express = require('express');
const router = express.Router();
const { registerUser } = require('../auth/register');
const { loginUser } = require('../auth/login');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;