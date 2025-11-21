const express = require('express');

const app = express();
const PORT= 6100;

const friends = [
    {
        id: 1,
        name: 'Meherab'
    },
    {
        id: 2,
        name: "Juwel"
    },
    {
        id: 3,
        name: "Michael"
    }
]

app.get('/friends', (req, res)=>{
    res.json(friends);
});

app.get('/friends/:friendId', (req, res)=>{
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    
    if(friend){
        res.status(200).json(friend);
    }else {
        res.status(404).json({
            err: "Friend ID not found"
        })
    }
})

app.get('/message', (req, res)=>{
    res.send("<ul><li>Greetings! </li></ul>")
});

app.post('/messages', (req, res)=>{
    console.log("Updating messages...");
});

app.listen(PORT, ()=>{
    console.log("PORT RUNNING...");
});