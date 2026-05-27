const express = require('express');
const router = express.Router();
// lets import the login routes
const loginRoutes = require('./login.routes');
// let use the login middleware
router.use(loginRoutes)

// import the employee routes
const employeeRoutes = require('./employee.routes');
router.use(employeeRoutes)

module.exports = router