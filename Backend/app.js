// importing the express module and creating an instance of it
const express = require('express');
// import mysql2 module to interact with MySQL database
const mysql = require('mysql2/promise');
// creating an instance of the express application
const app = express();
// import cors
const cors = require('cors')
// use the middleware
app.use(cors())
// use express json middleware
app.use(express.json())
// defining the port number on which the server will listen
const port = 4000;
// define a route handler for the default home page
app.get('/', (req, resp) => {
    return resp.send('Testing Webserver')
})

// lets check the connection
//const mysql = require('mysql2');
// const conn = mysql.createPool({
//     host: 'localhost',
//     user: 'demoapp',
//     password: 'demoapp',
//     database: 'demoapp',
//     connectionLimit: 10
// });
// // lets check it
// conn.getConnection((err, connection) => {
//     if (err) {
//         console.log("Can't connect to the DB");
//     }
//     console.log('DB Connected successfully');
//     connection.release();
// })

const conn = mysql.createPool({
    host: 'localhost',
    user: 'demoapp',
    password: 'demoapp',
    database: 'demoapp'
});

async function getUsers() {
    try {
        const [rows] = await conn.query("SELECT 1");
        console.log('DB connected');
    } catch (err) {
        console.log(err.message);
    }
}
getUsers();

// Post request handler to add a new employee to the database
app.post('/add-employee', async (req, resp) => {
    // lets destructure the requested data
    const { first_name, last_name, email, password } = req.body;
    // console.log(first_name, last_name, email, password);
    try {
        const [response] = await conn.query(`INSERT INTO employee_test(first_name,last_name,email,password)VALUES(?,?,?,?)`, [first_name, last_name, email, password]);
        console.log('from response', response.insertId)
        return resp.json({
            status: 'success',
            message: 'Employee added successfully',
            SentData: { first_name, last_name, email }
        })
    } catch (error) {
        console.log('error', error.message);
        return resp.json({
            status: 'failed',
            message: 'Not registered'
        })
    }
});
// Post request handler to add a login employee.
app.post('/login', async (req, resp) => {
    // console.log(req.body);
    const { email, password } = req.body;

    try {
        const [response] = await conn.query(`SELECT * FROM employee_test where email =? and password = ?`, [email, password]);
        const { first_name, last_name } = response[0];
        if (response.length > 0) {
            return resp.status(200).json({
                status: 'success',
                message: 'Employee logged in successfully',
                SentData: {
                    first_name,
                    last_name,
                    email
                }
            });
        } else {
            return resp.status(400).json({
                status: 'failed',
                message: 'login failed'
            })
        }
    } catch (error) {
        console.log('error', error);
        return resp.status(500).json({
            status: 'failed',
            message: error.message,
        })
    }
})




// start the server
app.listen(port, () => console.log(`server listening on port${port}`));