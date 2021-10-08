const express = require('express');
const router = express.Router({ mergeParams: true }); //access route params
const { validationResult, check } = require('express-validator/check');
require('dotenv').config()

const authControllers = require('../controllers/auth-controllers')

router.post('/login', authControllers.login);
router.post('/register', [
    check('username', 'Username name must be at least 2 characters and less than 15 characters.').isLength({ min: 2, max: 15 }),
    check('password', 'Password must be at least 2 characters and less than 15 characters.').isLength({ min: 2, max: 15 }),
    check('email', 'Email is requred').exists()
], authControllers.register);

module.exports = router;