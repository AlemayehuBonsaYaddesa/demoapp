// lest import the employee service 
const employeeService = require('../services/employee.service')

async function addEmployee(req, resp, next) {
    // console.log(req.body)
    const response = await employeeService.addEmployee(req.body);
    if (response.status) {
        return resp.json({
            message: 'employee registered successfully',
        })
    } else {
        return resp.json({
            message: 'employee not registered '
        })
    }
}
module.exports = { addEmployee }