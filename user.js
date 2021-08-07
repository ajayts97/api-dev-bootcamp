const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  userType: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
