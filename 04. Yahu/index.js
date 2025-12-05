const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Hello World</h1>");
})

app.get("/about", (req, res)=>{
    res.send("New about page");
})

app.get("/user/:userId/book/:bookId", (req, res)=>{
    res.send(req.params);
})

app.listen(5000, ()=>{
    console.log("Port running successfully");
})