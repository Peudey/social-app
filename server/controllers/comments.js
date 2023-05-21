import db from "../config/db.js";

//@TODO add pagination
export async function getPostComments(req, res) {
    const id = req.params.id;

    let query = "SELECT c.id, c.pid, c.cid, c.uid, c.body, U.username " +
    "FROM comments C " +
    "JOIN users U on U.id = C.uid " +
    "WHERE C.pid = ?;";

    db.query(query, id, (err, result)=> {
        if(err) console.log(err);
        res.json(result);
    });
}
//@TODO get comments by userid