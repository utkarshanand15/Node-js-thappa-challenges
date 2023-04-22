const http =require("http");
const server=http.createServer((req,res)=>{
    res.end("Hello from my side");
 })
    server.listen(8000,"127.0.0.1",()=>{
        console.log("Listning  to port number 8000");
    })
