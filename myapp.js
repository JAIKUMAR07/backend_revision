const express = require("express");
// ab ye as a tool box ajata hai but iske udner ka tool ko use krne ke liye hume
// ise call krna padta padta hai

const app = express();
// to ye us box ko open kr rha hai call krke

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/adress", (req, res) => {
  res.send("hello world raipur se ");
});
