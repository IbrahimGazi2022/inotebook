const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/ibrahim";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database is Connected");
  } catch (error) {
    console.log("Database is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
