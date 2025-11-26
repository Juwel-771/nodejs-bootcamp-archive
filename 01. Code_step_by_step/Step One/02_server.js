const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("Meherab Bin Haque");
    res.end();
});
server.listen(5000, ()=>{
    console.log(`Port Running on ${5000}`);
});