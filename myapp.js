const express = require("express");
const app = express();
const morgan = require("morgan");
const dbConnection = require("./config/db");
const userModel = require("./models/user");

app.use(morgan("dev"));

app.set("view engine", "ejs");

// built in middle ware to decode the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server ka public file ko allow krwana chalane ke liye
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.send("about page ");
});

app.get("/profile", (req, res) => {
  res.send("prfile page ");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// data lena is path se
app.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;
  // user model se schema lena the n
  const newUser = await userModel.create({
    userName: userName,
    email: email,
    password: password,
  });
  res.send(newUser); // jo variable hai
});

app.get("/get-users", async (req, res) => {
  userModel
    .find({
      email: "aaa",
    })
    .then((users) => {
      res.send(users);
    });
});
app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate(
    //finding
    {
      userName: "aaa",
    },
    //updating
    {
      userName: "dddd",
    }
  );

  res.send("updated user");
});

app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({
    userName: "dddd",
  });
  res.send("deleted  user");
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body); // Fixed typo
  res.send("Data received"); // Fixed spelling
});

app.listen(3000);
