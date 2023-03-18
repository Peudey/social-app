import mysql from 'mysql';
const db = mysql.createConnection({
    host: "172.23.112.1",
    user: "wsl",
    password: "root",
    database:"social_app" 
});
export default db;