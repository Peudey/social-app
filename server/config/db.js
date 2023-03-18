import mysql from 'mysql';
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"social_app" 
});
export default db;
