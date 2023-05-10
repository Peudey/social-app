import db from "../config/db.js";
import moment from "moment";

export async function getPost(req,res) {
    const id = req.params.id;
    const uid = req.params.uid;
    console.log(id);

    let query = "SELECT p.id, p.title, p.body, s.subName as subreddit, p.score, u.username, p.posted, pv.vote " +
    "from posts p " +
    "JOIN users u ON p.aid = u.id " +
    "JOIN subreddits s ON p.sid = s.id " +
    "left join postVotes pv ON pv.pid = p.id AND pv.uid = ? " +
    "WHERE p.id = ?;";

    db.query(query, [uid, id], (err, result)=> {
        if(err) console.log(err);
        console.log(result);
        res.json(result);
    });
}

export async function getPosts(req,res) {
    const page = req.params.page;
    const sort = req.params.sort;
    const uid = req.params.uid;
    let sortQuery = "";
    console.log(sort);
    
    switch(sort) {
        case '0':
            sortQuery = "ORDER BY (power(score, 3)/(0.5 * datediff('"+ moment(Date.now()).format("YYYY-MM-DD") + "', p.posted))) DESC ";
            break;
        case '1':
            sortQuery = "ORDER BY posted ASC ";
            break;
        case '2':
            sortQuery = "WHERE p.posted >= '" + moment(Date.now()).subtract(1, 'day').format("YYYY-MM-DD") + "'ORDER BY score DESC ";
            break;
        case '3':
             sortQuery = "WHERE p.posted >= '" + moment(Date.now()).subtract(1, 'month').format("YYYY-MM-DD") + "' " + 
             "AND p.posted <= '" + moment(Date.now()).format("YYYY-MM-DD") + "'ORDER BY score DESC ";
             break;
        case '4':
            sortQuery = "WHERE p.posted >= '" + moment(Date.now()).subtract(1, 'year').format("YYYY-MM-DD") + "' " +
            "AND p.posted <= '" + moment(Date.now()).format("YYYY-MM-DD") + "'ORDER BY score DESC ";
            break;
    }

    let query = "SELECT p.id, p.title, p.body, s.subName as subreddit, p.score, u.username, p.posted, pv.vote " +
    "from posts p " +
    "JOIN users u ON p.aid = u.id " +
    "JOIN subreddits s ON p.sid = s.id " +
    "left join postVotes pv ON pv.pid = p.id AND pv.uid = ? " +
    sortQuery + " " +
    "LIMIT 10 " +
    "OFFSET ?;";

    console.log(query);
    db.query(query, [uid, page * 10], (err, result) => {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
}

// TODO: CREATE VOTE FOR USER WHO SUBMITTED
export async function publishPost(req, res) {
    console.log(req.body);
    let values = [
        req.body.aid,
        req.body.title,
        req.body.sid,
        req.body.body,
        1,
        moment(Date.now()).format("YYYY-MM-DD")
    ]

    console.log(values);

    let query = "insert into posts(aid, title, sid, body, score, posted) values(?);";

    db.query(query, [values], (err, result) => {
        if(err) {
            console.log(err)
            res.status(400).json(err);
        };
        console.log(result);
        res.status(200).json("Post submitted!");
    });
}

