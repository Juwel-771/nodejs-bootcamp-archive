setTimeout(()=> console.log("🐇 finishes tha races"), 1000);

console.log("🐢 finishes the race");

// ? Basic Asynchronous Callback
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
