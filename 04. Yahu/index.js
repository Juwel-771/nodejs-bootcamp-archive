const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Hello World</h1>");
})

app.get("/about", (req, res)=>{
    res.send("New about page");
})

app.get("/user/:userId-:bookId", (req, res)=>{
    res.send(req.params);
})

app.get("/search", (req, res)=>{

    const name = req.query.name;
    const age = req.query.age;

    res.send(`Searched value for Name :${name}, Age: ${age}`);    
})

app.listen(5000, ()=>{
    console.log("Port running successfully");
})