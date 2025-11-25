const {Buffer} = require("buffer");

const memoryContainer = Buffer.alloc(4);
// console.log(memoryContainer);

memoryContainer[0] = 0xf4;

console.log(memoryContainer);
console.log(memoryContainer[0]);