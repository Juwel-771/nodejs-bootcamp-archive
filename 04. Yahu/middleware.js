const express = require("express");
const app = express();
const http = require('http')

// * define a middleware 
const firstMiddleware = (req, res, next)=>{
    console.log("This middleware will run every routes");

    next();
}

const customMiddleware = (req, res, next)=>{
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} from method ${req.method} and URL ${req.url}`)
    next();
}

app.use(firstMiddleware, customMiddleware);

app.get("/", (req, res)=>{
    res.send("Home Page");
});

app.get("/about", (req, res)=>{
    res.send("About Page")
});

app.listen(3000, ()=>{
    console.log("Server running successfully");
});