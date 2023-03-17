const db = require("./config/db");
const express = require("express");
const cors = require('cors')

app = express();
const  PORT = 4000;
app.use(cors());
app.use(express.json())

db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.get("/api/getFromId/:id", (req,res)=>{
    const id = req.params.id;
    console.log(id);

    db.query("SELECT * from post WHERE id= ?", id, (err, result)=> {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
});
