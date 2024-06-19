/* MODULE EXPLANATION */
// const { add, subtract } = require("./utility");
// //console.log(add(2,2));
// //console.log(subtract(2,2));

// //Getting your OS details
// const os = require("os");
// console.log(os.cpus().length);

/* WITHOUT EXPRESS */
// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myServer = http.createServer((req, res)=>{
//     //console.log(req);
//     if(req.url === "/favicon.ico") return res.end();

//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);

//     const log = `\n${new Date().toLocaleString()}: ${req.method} ${req.url} new Request received.`;
//     fs.appendFile("./log.txt", log, (err, data)=>{
//         //res.end("Hello from server!");
//         //switch(req.url){
//         switch(myUrl.pathname){
//             case '/': 
//             if(req.method === 'GET') res.end("Home Page");
//                 break;
//             case '/about': 
//                 const username = myUrl.query.name;
//                 const userID = myUrl.query.userID;
//                 res.end(`About Page \nWelcome: ${username} `);
//                 break;
//             case '/contact': 
//                 res.end("Contact Page");
//                 break;
//             case '/signup': 
//                 if(req.method === 'GET')  res.end("Sign Up Form");
//                 else if(req.method === 'POST'){
//                     //DB Query
//                     res.end("Sucessfully signed up!");
//                 }
//                 break;
//             default:
//                 res.end("Invalid URL");
//         }
//     })
    
// });

// myServer.listen(9000, ()=>{console.log("Server Started!")})


/* WITH EXPRESS */
const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    return res.send("Home Page");
})

app.get('/about', (req, res)=>{
    return res.send("About Page" + "\nWeclome " + req.query.name);
})


app.listen(8000, ()=>{console.log("Server Started!")} );