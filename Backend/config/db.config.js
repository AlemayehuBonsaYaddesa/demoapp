const mysql = require('mysql2/promise');
require('dotenv').config();

const conn = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Check DB connection
async function checkConnection() {
    try {
        const connection = await conn.getConnection();
        console.log('DB connected');
        connection.release();
    } catch (error) {
        console.log(error);
    }
}
checkConnection();

module.exports = conn;