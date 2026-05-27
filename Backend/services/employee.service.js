// lets import the database 
const conn = require('../config/db.config');
async function addEmployee(employeeData) {

    const { first_name, last_name, email, password } = employeeData;
    // lets insert into the database table
    let Responses = '';
    try {
        const [response] = await conn.query(`INSERT INTO employee_test(first_name,last_name,email,password)VALUES(?,?,?,?)`, [first_name, last_name, email, password]);
        if (response) {
            Responses = {
                status: true,
                message: 'Registered'
            }
        } else {
            Responses = {
                status: false,
                message: 'failed'
            }
        }
        return Responses;
    }
    catch (error) {
        console.log(error);
        return Responses;
    }
}
module.exports = { addEmployee }