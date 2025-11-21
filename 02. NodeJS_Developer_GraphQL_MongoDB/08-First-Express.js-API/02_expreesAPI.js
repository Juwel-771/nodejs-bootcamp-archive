const express = require('express');

const app = express();
const PORT= 6100;

app.get('/', (req, res)=>{
    res.send({
        id: 1,
        name: "Meherab"
    });
});

app.get('/message', (req, res)=>{
    res.send("<ul><li>Greetings! </li></ul>")
});

app.post('/messages', (req, res)=>{
    console.log("Updating messages...");
});

app.listen(PORT, ()=>{
    console.log("PORT RUNNING...");
});