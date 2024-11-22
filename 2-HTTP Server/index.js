const http= require("http")
const fs = require("fs")

const myServer= http.createServer((req, res)=>{
    const logs = `${new Date().toISOString()}: ${req.url}, New Request Received\n`;
    fs.appendFile("Server-Request-Log.txt", logs, (err, result)=>{
    if(err){
        console.error("Logs not capturing" +err)
    }else{
        switch(req.url){
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                res.end("About")
                break;
            case "/product":
                res.end("Product")
                break;
            default:
                res.end("404: Page not found")
                break;
        }
    }
   })
    // res.end("Hello from Server")
})
myServer.listen(3000, ()=> console.log("Hey I am listing"))