// * create server in node js

const http = require('http');

// http.createServer((req, res)=>{
//     res.write("Juwel Meherab");
//     res.end("Hello")
// }).listen(4800);

http.createServer((req, resp)=>{
    resp.write("<h1>Juwel Meherab</h1>");
    resp.end("Zen");
}).listen(4900);
