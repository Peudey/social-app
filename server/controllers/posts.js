import db from "../config/db.js";

export async function getPost(req,res) {
    const id = req.params.id;
    console.log(id);

    db.query("SELECT * from post WHERE id= ?", id, (err, result)=> {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
}

export async function getPosts(req,res) {
    db.query("SELECT * from post limit 10", (err, result)=> {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
}