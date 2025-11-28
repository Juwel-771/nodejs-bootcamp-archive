import express from "express";
import path from "path";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get("/", (req, res)=>{
    const filePate = path.resolve('view/user.html');
    res.send(filePate)
});


app.get("/login", (req, res)=>{
    res.send(`
        <form action="/submit" method="post">
            <input type="email" name="email">
            <input type="password" name="password">
            <button type="submit">Submit</button>
        </form>`)
});

app.get("/user", (req, res)=>{
    res.send("User List");
});

app.post("/submit", (req, res)=>{
    console.log("User Login Details: ", req.body);
    res.send("Data Submitted");
});

app.listen(5000);