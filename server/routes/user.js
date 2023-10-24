const express = require("express");
const {CreateUser,checkUsername} = require("../handlers/userHandlers");
const Router = express.Router();

Router.post('/create',CreateUser)
Router.post('/checkusername',checkUsername)

module.exports = Router;