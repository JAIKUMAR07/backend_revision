const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.set("view engine", "ejs");

// built in middle ware to decode the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about page ");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body); // Fixed typo
  res.send("Data received"); // Fixed spelling
});

app.listen(3000);
