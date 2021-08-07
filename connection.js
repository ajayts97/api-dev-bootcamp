const mongoose = require("mongoose");

const connectToDB = async () =>
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

module.exports = connectToDB;
