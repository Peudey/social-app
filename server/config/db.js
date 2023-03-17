const mysql = require('mysql');
const db = mysql.createConnection({
    host: "172.23.112.1",
    user: "wsl",
    password: "root",
    database:"social_app" 
});
module.exports = db;