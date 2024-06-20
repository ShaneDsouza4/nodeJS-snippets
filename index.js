const express = require('express');
const app = express();

//Middleware
const { logReqRes } = require("./middlewares/index");


//Connection
const { connectMongoDB } = require("./connection");
connectMongoDB('mongodb://127.0.0.1:27017/practice')
.then(()=>console.log("MongoDB Connected!"))

//Middleware use
app.use(logReqRes("log.txt"))

//Router
const userRouter = require("./routes/user");
app.use("/api/users", userRouter);


app.listen(8000, ()=>console.log("Server Started."));