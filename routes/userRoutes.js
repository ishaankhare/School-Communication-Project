const express = require('express');
const { validateLogin, registerUser, updatePassword } = require('../controllers/userController');
const router = express.Router();

//Register user
router.post('/register', registerUser);

//Login user
router.post('/login', validateLogin);

//Update password
router.post('/update', updatePassword);

module.exports = router


