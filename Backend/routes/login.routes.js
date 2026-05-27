const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller')

// lets import the login routes
router.post('/login', loginController.logIn)

module.exports = router