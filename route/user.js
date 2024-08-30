const express = require('express');
const route = express.Router();
const { signUp } = require("../controller/auth");

route.post("/signup", signUp);

module.exports = route;
