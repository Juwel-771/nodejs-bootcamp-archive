const http = require("http");
const { json } = require("stream/consumers");


const userData = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 28,
    "isActive": true
  },
  {
    "id": 2,
    "name": "Emma Watson",
    "email": "emma.watson@example.com",
    "age": 25,
    "isActive": false
  },
  {
    "id": 3,
    "name": "Michael Smith",
    "email": "michael.smith@example.com",
    "age": 32,
    "isActive": true
  },
  {
    "id": 4,
    "name": "Sophia Johnson",
    "email": "sophia.johnson@example.com",
    "age": 22,
    "isActive": true
  },
  {
    "id": 5,
    "name": "William Brown",
    "email": "william.brown@example.com",
    "age": 35,
    "isActive": false
  },
  {
    "id": 6,
    "name": "Olivia Davis",
    "email": "olivia.davis@example.com",
    "age": 30,
    "isActive": true
  },
  {
    "id": 7,
    "name": "James Miller",
    "email": "james.miller@example.com",
    "age": 27,
    "isActive": false
  },
  {
    "id": 8,
    "name": "Ava Wilson",
    "email": "ava.wilson@example.com",
    "age": 24,
    "isActive": true
  },
  {
    "id": 9,
    "name": "Benjamin Moore",
    "email": "benjamin.moore@example.com",
    "age": 40,
    "isActive": true
  },
  {
    "id": 10,
    "name": "Mia Taylor",
    "email": "mia.taylor@example.com",
    "age": 29,
    "isActive": false
  }
]


const server = http.createServer((req, res)=>{
    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
})

server.listen(5000, ()=>{
    console.log(`Server running ${5000}`);
})