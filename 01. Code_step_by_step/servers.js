const fs = require('http');

const server = http.createServer((req, res)=>{
    res.seHeader("Context-type", "text/html");
    res.write("<h2>Hello I'm Juwel</h2>");
    res.end();
});

server.listen(4800);