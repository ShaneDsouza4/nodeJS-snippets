const express = require("express");
const { handleGetAllUsers, handlecreateUser, handlegetUserByID, handleupdateUserByID, handledeleteUserByID } = require("../controllers/user")

const router = express.Router();

router.route("/")
.get(handleGetAllUsers)
.post(handlecreateUser);

router.route("/:id")
.get(handlegetUserByID)
.patch(handleupdateUserByID)
.delete(handledeleteUserByID)

module.exports = router;