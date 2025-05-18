// Core Modules
const path = require("path");

// External Module
const express = require("express");
const userRouter = express.Router();
const homesController = require("../controllers/homes");

// Use the getHomes controller for the root route
userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
