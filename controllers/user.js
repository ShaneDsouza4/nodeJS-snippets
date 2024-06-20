const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function handlecreateUser(req, res){
    const body = req.body;
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

    return res.status(201).json({msg:"success", id: result._id});
}

async function handlegetUserByID(req, res) {
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({msg:"No user found!"});
    }
    return res.json(user);
}

async function handleupdateUserByID(req, res) {
    const result = await User.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({msg:"Success!"});
}

async function handledeleteUserByID(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:"Delete Success!"});
}

module.exports = {
    handleGetAllUsers,
    handlecreateUser,
    handlegetUserByID,
    handleupdateUserByID,
    handledeleteUserByID
}