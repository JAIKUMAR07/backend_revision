const express = require("express");

const app = express();

const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.get(
  "/",
  (req, res, next) => {
    const c = 10;
    const d = 20;
    console.log(c + d);
    next();
  },
  (req, res) => {
    res.render("index", { siteName: "My Awesome Site", userName: "John" });
  }
);
1;

app.get("/a", (req, res) => {
  res.render("index", { siteName: "My Awesome Site", userName: "John" });
});

app.listen(3000);
