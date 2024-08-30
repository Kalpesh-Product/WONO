const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: '127.0.0.1', // Host from your MySQL server details
    user: 'root', // User from your MySQL server details
    password: 'Aiwin1234', // Replace with your MySQL password
    database: 'WonoUserData', // Your database name
    connectionLimit: 10
});

// Promisify for Node.js async/await.
const promisePool = pool.promise();

console.log('Connected to MySQL database!');

module.exports = promisePool;
