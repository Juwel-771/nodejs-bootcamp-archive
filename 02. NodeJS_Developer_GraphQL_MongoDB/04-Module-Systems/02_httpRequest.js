const {get} =  require('http');

get('http://www.google.com', (res)=>{
    res.on('data', (chunk)=>{
        console.log(`Chunk Data: ${chunk}`);
    })
    res.on('end', ()=> {
        console.log('No more data');
    })
});
// ! practice 5-7 times

// ? Node.js provides multiple ways to make HTTP requests:

// Built-in http/https modules (low-level)
// node-fetch (browser fetch API for Node.js)
// axios (popular HTTP client)
// got (lightweight alternative)

// * 🔧 Built-in HTTP/HTTPS Modules
// const https = require('https');

// https.get('https://jsonplaceholder.typicode.com/users', (response) => {
//     let data = '';
    
//     response.on('data', (chunk) => {
//         data += chunk;
//     });
    
//     response.on('end', () => {
//         const users = JSON.parse(data);
//         console.log(users);
//     });
// }).on('error', (err) => {
//     console.error('Error:', err);
// });