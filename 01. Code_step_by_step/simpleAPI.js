const fs = require('http');

const user = [
    {
        name: 'juwel',
        age: 26,
        email: 'juwel@mail.com'
    },
    {
        name: 'meherab',
        age: 29,
        email: 'meherab@mail.com'
    },
    {
        name: 'ahmed',
        age: 21,
        email: 'ahmed@mail.com'
    },

];

fs.createServer((req, res)=>{
    res.setHeader("Content-Type", 'application/json');
    res.write(JSON.stringify(user));
    res.end();
}).listen(6100)