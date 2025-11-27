const path = require("path");
const file = "document/file.txt";

console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));

console.log(__dirname);
console.log(__filename);