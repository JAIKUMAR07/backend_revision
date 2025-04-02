const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
1;

app.get("/a", (req, res) => {
  res.render("index", { siteName: "My Awesome Site", userName: "John" });
});

app.listen(3000);
