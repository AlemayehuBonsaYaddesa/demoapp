// import mysql2 module to interact with MySQL database
const conn = require('../config/db.config');
async function logIn(employeeData) {
    // console.log(employeeData)
    let status = false;
    try {
        const { email, password } = employeeData;
        const [response] = await conn.query('SELECT * FROM employee_test where email = ? and password = ? ', [email, password]);
        if (response.length > 0) {
            const data = {
                status: true,
                info: response
            }
            return data
        } else {
            return status;
        }

    } catch (error) {
        console.log(error)
        return status
    }

}
module.exports = { logIn }