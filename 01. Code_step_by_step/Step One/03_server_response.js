const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    res.setHeader("content-type", "text/html");
    res.write("<h1>Hello server response</h1>");
    res.end();
});

server.listen(5000);