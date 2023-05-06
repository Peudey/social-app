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
        console.log(result);
    });

    query = "update posts set score = score + (?) where id = ?;"

    db.query(query, [req.body.vote===1?1:-1,values[0]], (err, result) => {
        if(err) {
            console.log(err);
            res.status(400).json(err);
        };
        console.log(result);
        res.status(200).json("vote submitted");
    });
}