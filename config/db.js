const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_db',
});

module.exports = mySqlPool;