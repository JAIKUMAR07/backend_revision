const express = require("express");
const path = require("path");
const hostRouter = express.Router();

const rootDir = require("../config/utils/pathUtil");
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

hostRouter.use(express.urlencoded());

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});
module.exports = hostRouter;
