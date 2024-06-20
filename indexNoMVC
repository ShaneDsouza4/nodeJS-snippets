const express = require("express");
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

const mongoose = require("mongoose");

//Connection
mongoose.connect('mongodb://127.0.0.1:27017/practice')
.then(()=>console.log("MongoDB connected."))
.catch(err => console.log("MongoDB Error", err));

//Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true,
        unique: true //Email must be unique is DB
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    }
}, { timestamps: true });

//Model
const User = mongoose.model('user', userSchema);


//Create User
app.post("/api/users", async(req, res)=>{
    //console.log("Create User API hit!")
    const body = req.body;
    //console.log(body)
    if(!body || !body.email){
        return res.status(400).json({msg:"Email is required"});
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName:body.last_name,
        email:body.email,
        jobTitle:body.job_title,
        gender: body.gender
    })

    console.log(result);

    return res.status(201).json({msg:"success"});

});

//Get All Users
app.get("/users", async(req, res)=>{
    const allDBUsers = await User.find({});
    console.log(allDBUsers)

    const html = `
        <ul>
            ${allDBUsers
                .map((user)=>`<li>${user.firstName} - ${user.email}</li>`)
                .join("")
            }
        </ul>
    `
    return res.send(html);
});

app.route("/api/users/:id").get(async(req, res)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({msg:"No user found!"});
    }
    return res.json(user);
}).patch( async(req, res)=>{
    const result = await User.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({msg:"Success!"});
}).delete(async(req, res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:"Delete Success!"});
})


//Start Server
app.listen(8000, ()=>{console.log("Server started!")});