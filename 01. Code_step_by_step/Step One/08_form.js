const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http.createServer((req,res)=>{

    fs.readFile("./html/index.html", "utf-8", (err, data)=>{
        if(err){
            res.writeHead(500, {"content-type" : "text/plain"});
            res.write("Internal Server error");
            res.end();
        }else if(req.url == "/"){
            res.writeHead(200, {"content-type" : "text/html"});
            res.write(data);
            res.end();
        }else if(req.url=="/submit"){
            let dataBody = [];
            req.on("data", (chunk)=>{
                dataBody.push(chunk);
            });
            req.on("end", ()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                let dataString = "Name is: " + readableData.name+" Email : "+readableData.email;
                console.log(readableData);
                console.log(dataString);
                // * sychronize system to create file
                // fs.writeFileSync("documents/"+readableData.name+".txt", dataString);

                // * Asynchronize system to create file
                fs.writeFile("documents/"+readableData.name+".txt", dataString, "utf-8", (err)=>{
                    if(err){
                        console.log(err);
                    }
                });
                console.log("File Created");
            })
            res.write("<h1>Data Submitted</h1>");
            res.end();
        }
    });

    // if(req.url=="/"){
    //     res.writeHead(200, {"content-type" : "text/html"});
    //     res.write(`
    //         <form action="/submit" method="post">
    //             <input type = "text" placeholder = "Enter Your name" name="name"/>
    //             <input type = "email" placeholder = "Enter Your email" name="email"/>
    //             <button type="submit">Submit</button>
    //         </form>
    //     `)
    //     res.end();
    // } else if(req.url=="/submit"){
    //     res.write("<h1>Data Submitted</h1>");
    //     res.end();
    // }

    
}).listen(5000);