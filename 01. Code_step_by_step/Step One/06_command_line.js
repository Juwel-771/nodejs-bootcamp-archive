const http = require("http");

const port = process.argv[2];

const server = http.createServer((req, res)=>{
    res.write("Dynamic port");
    res.end();
}).listen(port);