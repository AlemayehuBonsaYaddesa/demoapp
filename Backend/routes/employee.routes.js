const express = require('express');
const router = express.Router();

// lets import the employee Controllers
const employeeController = require('../controllers/employee.controller');

// lest use the controllers middleware
router.post('/add-employee', employeeController.addEmployee);

// export the router
module.exports = router;