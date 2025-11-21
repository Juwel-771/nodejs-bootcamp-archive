const http = require('http');
const PORT = 6800;

const friend = [
    {
        id: 1,
        name: 'Juwel'
    }, 
    {
        id: 2,
        name: 'Meherab'
    }
]

const server = http.createServer('request', (req, res)=>{
    const item = req.url.split('/');
    if(item[1] === 'friend'){
        res.statusCode == 200,
        res.setHeader('content-type', 'application/json');
        if(item.length === 3){
            const friendIndex = Number(item[2]);
            res.end(JSON.stringify(friend[friendIndex]));
        }else{
            res.end(JSON.stringify(friend));
        }
        res.end(JSON.stringify({}));
    } else if(req.url === 'message'){
        res.setHeader('content-type', 'text/html');
        res.write(
            `<html>
                <body>
                    <ul>
                        <li>Juwel Meherab</li>
                    </ul>
                </body>
            </html>`);
        res.end();
    }else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`);
})