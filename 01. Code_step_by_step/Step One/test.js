const readLine = require("readline");
const http = require("http");

const r1 = readLine.createInterface();
console.log(r1);

const server = http.createServer((req, res)=>{
    console.log(readLine);
    res.write("Read Line Data");
    res.end();
}).listen(8000);
