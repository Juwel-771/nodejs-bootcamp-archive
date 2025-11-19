/* 
JavaScript is single-threaded by default, but it can use multiple threads in certain environments.

Node.js added real multithreading in Node 10.5+ using:

▶️ Worker Threads Module

Used for CPU-heavy tasks.

Example:

*/

const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js", {
  workerData: { number: 10 }
});

worker.on("message", (result) => {
  console.log("Result:", result);
});


// Inside worker.js:

const { parentPort, workerData } = require("worker_threads");

let n = workerData.number;
let result = n * 5;

parentPort.postMessage(result);