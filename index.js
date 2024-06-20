const express = require("express");
const fs = require("fs");
const bodyParser = require('body-parser')

const app = express();

//Middleware - Plugin
//app.use(express.urlencoded({extended:false})); //For x-www-form-urlencoded
app.use(express.json()); //For raw JSON

app.use((req, res, next) =>{
    console.log("Hello from Middleware 1");
    //req.myUsername = "ShaneDsouza4";
    //return res.json({msg: "Hello from Middleware 1"});
    next();
})

app.use((req, res, next) =>{
    //console.log("Hello from Middleware 2", req.myUsername);
    //return res.json({msg: "Hello from Middleware 2"});
    next();
})

app.use((req, res, next) =>{
    fs.appendFile(
        "log.txt",
        `${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
        (err, data) => {
            next();
        }
    )
})

const users = require("./MOCK_DATA.json");

app.get("/users", (req, res)=>{
    const html = `
        <ul>
            ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    return res.send(html);
});


//Rest API
app.get("/api/users", (req, res)=>{
    res.setHeader('X-myName', "Shane Redd");
    return res.json(users);
});

app.route("/api/users/:id").get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if(!user){
        return res.status(404).json({msg:"No user found!"});
    }
    return res.json(user);
}).patch((req, res)=>{
    //TODO
    const body = req.body;
    
    objIndex = users.findIndex(x => x.id == body.id);

    console.log(objIndex);
    users[objIndex] = body;

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, result)=>{
        res.json({status:"success", id: objIndex});
    });
    
}).delete((req, res)=>{
    const id = Number(req.params.id);
    console.log("ID: ", id);
    
    objIndex = users.findIndex(x => x.id == id);
    users.splice(objIndex, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, result)=>{
        res.json({status:"success", id: objIndex});
    });

})


app.post("/api/users", (req, res)=>{
    const body = req.body;
    if(!body || !body.email){
        return res.status(400).json({msg:"Email is required"});
    }

    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, result)=>{
        res.status(201).json({status:"success", id: users.length});
    })
});


app.listen(8000, ()=>{console.log("Server started!")});