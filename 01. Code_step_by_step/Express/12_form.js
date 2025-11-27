import express from "express";
import home from "./pages/home.js";
import login from "./pages/login.js";
import submit from "./pages/submit.js";
import path from "path";
// import user from "./view/user.html";


const app = express();

app.get("/", (req, res)=>{
    res.send(home());
});

app.get("/login", (req, res)=>{
    res.send(login());
});

app.post("/submit", (req, res)=>{
    res.send(submit());
});

app.get("/users", (req, res)=>{
    const abrPath = path.resolve('view/user.html');
    res.sendFile(abrPath);
})

app.listen(5000);