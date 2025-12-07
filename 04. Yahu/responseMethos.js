const express = require('express')

const app = express();

app.set("view-engine", "ejs");

app.get("/", (req, res)=>{
    // * send
    // res.send(
    //     ['Apple', 'Orange', 'Mango']
    // )

    // * json
    const user = [
        {id: 1, name: "Juwel"},
        {id: 2, name: "Meherab"}
    ]
    res.json(user)

    // * jsonp - doesn't use anymore
});

app.get("/about", (req, res)=>{
    res.redirect("/user");
});

// app.get("/user", (req, res)=>{
//     // res.send("<h1>User Page</h1>");
//     res.redirect("https://www.google.com")
// });

app.use(express.json())

app.get("/user", (req, res)=>{
    res.render('user')
});

app.post("/user", (req, res)=>{
    res.send(req.body)
})

app.listen(3000, ()=>{
    console.log(`Port connected successfully`);
}); 