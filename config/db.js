const mongoose = require("mongoose");

// ✅ Correct MongoDB URL
const connection = mongoose
  .connect("mongodb://127.0.0.1/men")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log("DB Connection Error:", err));

module.exports = connection;
