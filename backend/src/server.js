const express = require('express') ;
let app = express();
const cors = require('cors');
app.use(cors());

const posts = require("../data/posts");
const users = require("../data/users");

app.get("/user", (req, res) => {
    return (
        res.json(users)
    )
})
app.get("/user/post", (req, res) => {
    return (
        res.json(posts)
    )
    
})

app.listen(3001)