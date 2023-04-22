const http = require("http");
const url=require("url");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == "/") {
        res.end("Hello from Home");
    }
    else if(req.url == "/about") {
        res.end("Hello from About");
    }
    else{
        res.end("404 Error");
    }

 })
server.listen(8001, "127.0.0.1", () => {
    console.log("Listning  to port number 8001");
})
