/* 
* Non-blocking means Node.js does not wait for a task to finish before moving to the next one.

* Instead of stopping the whole program (blocking), Node.js continues executing other code while slow operations (like reading files, database queries, API calls) finish in the background.

? When the slow task is done, Node.js notifies you using:

! Callbacks
! Promises
! async/await

*/
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    console.log(data.toString());
});

console.log("This will print BEFORE file is read");
