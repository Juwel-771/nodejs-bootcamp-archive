const http = require("http");

const server = http.createServer((req, res)=>{
    // console.log(req);
    console.log(req.param);

    if(req.url=="/"){
        res.write("<h1>Home page</h1>");
    }else if(req.url=="/login"){
        res.write("<h1>Login Page</h1>");
    }else {
        res.write("<h1>Other page</h1>");
    }
    res.end();
}).listen(5000);