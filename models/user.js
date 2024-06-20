const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

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

module.exports = User;