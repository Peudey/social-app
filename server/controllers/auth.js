import db from "../config/db.js";

export async function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let query = "select * from users " + 
    "where username = ?;";
    console.log(username, password);

    db.query(query, username, (err, result) => {
        if(err) console.log(err);
        if(result.length == 0 || result[0].pass != password) {
            res.status(400).json("Incorrect username or password");
        } else {
            res.status(200).json({id:result[0].id});
        }
    });
}