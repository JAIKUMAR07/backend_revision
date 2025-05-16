const express = require("express");
// core module
const path = require("path");

const rootDir = require("../config/utils/pathUtil");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
