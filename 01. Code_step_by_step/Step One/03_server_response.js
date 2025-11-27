const fs = require('fs');
const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.setHeader("content-type", "text/html");
//     res.write("<h1>Hello server response</h1>");
//     res.end();
// });
// server.listen(5000);

const server_side = http.createServer((req, res)=>{

    console.log("=============== RESPONSE COMPONENTS ===============");

    // * SET STATUS CODE
    res.statusCode(200);
    res.statusMessage("OK");

    // * SET HEADERS
    res.setHeader("content-type", "text/plain");
    res.setHeader("X-Powered-By", "Node.js");
    res.setHeader("Set-Cookies", ["session=123abc", "language=en"]);

    // * WRITE HEAD
    res.writeHead(200, {
        "content-type" : "text/plain",
        "custom-Header" : "Custom Value"
    });

    // *WRITE BODY
    res.write("Hello");
    res.write("World");

    // * END RES
    res.end();
});

server_side.listen(5000, ()=>{
    console.log(`Server running on ${5000} port`);
});