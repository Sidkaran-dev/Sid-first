const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url}  New Request Received\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
    
        switch(myUrl.pathname){

            case "/":
                const username=myUrl.query.myname;
                res.end(`Hi I am ${username}`);
                break;
            case "/about":
                res.end("Hi I am about page");
                break;
            
            case "/contact":

                res.end("Hi i am about Page");
                break;

            case "/search":
                const search =myUrl.query.search_query;
                res.end("Here are the results of your search "+search);
                break;

            default:
                res.end("404 Not Found");

            }

       });
   

});

myServer.listen(8000,()=>console.log("Server started"));