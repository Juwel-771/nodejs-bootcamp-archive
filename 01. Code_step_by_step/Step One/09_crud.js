const fs = require("fs");

// fs.writeFileSync("documents/file.txt", "This file has been created by fs");
// fs.unlinkSync("documents/file.txt");
// const data = fs.readFileSync("documents/file.txt", "utf-8");
// console.log(data);
// fs.appendFileSync("documents/file.txt", "and this added by append");

const operation = process.argv[2];
const name = process.argv[3];
const content = process.argv[4];

if(operation=="write"){
    // console.log(operation, name, content);
    fs.writeFileSync("documents/"+name+".txt", content);
}else if(operation=="read"){
    const readData = fs.readFileSync("documents/"+name+".txt", "utf-8");
    console.log(readData);
}else if(operation=="update"){
    const updateData = fs.appendFileSync("documents/"+name+".txt", content);
    console.log(updateData);
}else if(operation=="delete"){
    fs.unlinkSync("documents/"+name+".txt");
    console.log("Delete Successfully");
}