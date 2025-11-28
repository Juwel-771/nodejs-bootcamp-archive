import express from "express";

const app = express();

function checkAgeMiddleware(req, resp, next){
    if(!req.query.age || req.query.age < 18){
        resp.send("You are not allowed to access this page");
    }else {
        next();
    }
}

app.get("/", (req, res)=>{
    res.send("<h1>Home Route</h1>");
});

app.get("/login", checkAgeMiddleware, (req, res)=>{
    res.send("<h1>Login Page</h1>");
});

app.get("/users", (req, res)=>{
    res.send("<h1>Users Page</h1>");
});

app.get("/products", (req, res)=>{
    res.send("<h1>Products page</h1>")
});

app.listen(5000);




// function authentication(req, res, next){
    
//     const token = req.header["authorization"];

//     if(!token){
//         return res.status(401).send("Unauthorized: No access token found");
//     }

//     if(!token==1234){
//         return res.status(403).send("Forbidden: Invalid Token");
//     }

//     next();
// }

// app.get("/dashboard", (req, res)=>{
//     res.send("Welcome dashboard");
// });

// app.listen(5000);

// function isAdmin(req, res, next){
//     if(req.query.role==="admin"){
//         res.send("Hello Admin");
//         next();
//     }else {
//         res.send("Access denied, only admin can access");
//     }
// };

// app.get("/", (req, res)=>{
//     res.send("Home Page");
// })

// app.get("/admin", isAdmin, (req, res)=>{
//     res.send("Welcome admin");
// });

// app.listen(5000);