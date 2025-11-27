const express = require("express");
const app = express();

// console.log(app);

app.get("/",(req, res)=>{
    res.send("Express JS is running");
}).listen(5000);