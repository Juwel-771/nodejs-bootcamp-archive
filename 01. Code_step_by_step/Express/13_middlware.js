import express from 'express';

const app = express();

// function checkRoute(req, res, next){
//     console.log(req.url);
//     next();
// }

app.use((req, res, next)=>{
    console.log("User Access Page: "+req.url+" ");
    next();
});

app.get("/", (req, res)=>{
    res.send("Home Page");
});

app.get("/user", (req, res)=>{
    res.send("User Page");
});

app.get("/about", (req, res)=>{
    res.send("About Page");
})

app.listen(5000);