import db from "../config/db.js";

export async function addVote(req,res) {
    let values = [
        req.body.postId,
        req.body.commentId,
        req.body.userId,
        req.body.vote,
    ]

    console.log(values);
    let query = "insert into votes(pid, cid, uid, vote) values(?);";

    db.query(query, [values], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
        console.log(result);
    });

    query = "update posts set score = score + 1 where id = ?;"

    db.query(query, values[0], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
        console.log(result);
        res.status(200).json("vote submitted");
    });
}