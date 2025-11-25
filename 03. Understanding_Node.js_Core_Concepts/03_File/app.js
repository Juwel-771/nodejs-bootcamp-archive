const fs = require('fs/promises');

(async ()=>{
    const watcher = fs.watch('./app.js');

    for await (const event of watcher){
        if(event.eventType === "change" && event.eventType == "command.txt"){
            console.log("File Changed!");
        }
    }
})