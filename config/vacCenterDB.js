const mysql = require("mysql");

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    passsword: '12345678',
    database: 'vacCenter'
});

module.exports = connection;