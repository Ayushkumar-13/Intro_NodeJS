//import http from 'http';
let http = require("http");
let fs = require("fs")
let {Buffer} = require ("buffer");
buf = Buffer.from("hello");
 console.log(buf);
 console.log("starting server");

http.createServer((req,res) => {
    fs.readFile("responsive.html", (err,data) => {
        console.log(req.url)
        if (!err){
           res.writeHead(200, {
            "Content-Type": "text.html",
           })
           res.write(data);
           return res.end();
        }
        console.error(err)
        res.write("erroe while reading file");
        return res.end();
    });
})
.listen(8080);