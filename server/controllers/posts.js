import db from "../config/db.js";

export async function getPost(req,res) {
    const id = req.params.id;
    console.log(id);

    let query = "SELECT p.id, p.title, p.body, p.subreddit, p.score, u.username " +
    "from post p " +
    "JOIN users u ON p.authorId = u.id " +
    "WHERE p.id = ?;";

    db.query(query, id, (err, result)=> {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
}

export async function getPosts(req,res) {
    let query = "SELECT p.id, p.title, p.body, p.subreddit, p.score, u.username " +
    "from post p " +
    "JOIN users u ON p.authorId = u.id ";

    db.query(query, (err, result) => {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
}