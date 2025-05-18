const path = require("path");
const rootDir = require("../utils/pathUtil");
const Home = require("../models/home");

exports.getAddHomes = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
};

exports.postAddHome = (req, res) => {
  console.log("home registration successful for:", req.body);
  const { houseName } = req.body;

  // Fixed: Changed 'home' to 'Home' (capital H for constructor)
  const home = new Home(houseName);
  home.save();

  res.redirect("/host/home-added");
};

exports.getHomes = (req, res, next) => {
  const homes = Home.fetchAll();
  console.log("Fetched homes:", homes); // Debug log

  res.render("home", {
    registeredHomes: homes || [],
    pageTitle: "Airbnb",
  });
};

exports.postAddHome = (req, res) => {
  const { houseName } = req.body;
  console.log("Received house name:", houseName); // Debug log

  const home = new Home(houseName);
  home.save();
  console.log("Home saved successfully"); // Debug log

  res.redirect("/host/home-added");
};
