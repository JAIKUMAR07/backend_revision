const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const homesController = require("../controllers/homes");

hostRouter.get("/add-home", homesController.getAddHomes);
hostRouter.post("/add-home", homesController.postAddHome);
hostRouter.get("/home-added", (req, res) => {
  res.render("homeAdded", { 
    pageTitle: "Home Added Successfully" 
  });
});

module.exports = {
  hostRouter
};
