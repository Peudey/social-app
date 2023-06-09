import db from "../config/db.js";

//@TODO add comment vote
export async function addVote(req,res) {
    let values = [
        req.body.postId,
        req.body.userId,
        req.body.vote,
    ]

    let query = "insert into postVotes(pid, uid, vote) values(?);";

    db.query(query, [values], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
    });

    query = "update posts set score = score + (?) where id = ?;"

    db.query(query, [req.body.vote===1?1:-1,values[0]], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
        res.status(200).json("vote submitted");
    });
}

export async function removeVote(req,res) {
    let values = [
        req.body.postId,
        req.body.userId,
    ]

    let query = "delete from postvotes where pid = ? AND uid = ?;";

    db.query(query, [values], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
    });

    query = "update posts set score = score - 1 where id = ?;"

    db.query(query, [req.body.vote===1?1:-1,values[0]], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
        res.status(200).json("vote removed");
    });
}