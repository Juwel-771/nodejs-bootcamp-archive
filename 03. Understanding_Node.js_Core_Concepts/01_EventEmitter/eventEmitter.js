const eventEmitter = require("events");

console.log(eventEmitter);

class EventEmitter extends eventEmitter{}

const eve = new EventEmitter();

eve.on("foo", ()=>{
    console.log("Events trigger - 1");
});
eve.on("foo", ()=>{
    console.log("Events trigger - 2");
});
eve.on("foo", ()=>{
    console.log("Events trigger - 3");
});

eve.on("bar", ()=>{
    console.log("Event trigger on BAR");
})

eve.emit("foo");
eve.emit("bar");