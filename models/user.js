const mongoose = require("mongoose");

// just schema create kiye hai
const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
