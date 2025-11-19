/*
Each worker has:

its own V8 engine instance
its own event loop
its own JavaScript memory space    

*/

const { Worker } = require("worker_threads");

console.log("Main thread started");

const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log("From Worker:", msg);
});

worker.on("error", (err) => console.error(err));
worker.on("exit", () => console.log("Worker finished"));
