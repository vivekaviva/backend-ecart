const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected");
    });

    await mongoose.connect(process.env.DB_URL);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
