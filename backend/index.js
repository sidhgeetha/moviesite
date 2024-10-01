// import mongoose

const mongoose = require("mongoose");



const config = require("./utils/config");



const app = require("./app"); //connecting to MOongoDB

console.log("connecting to MongoDB...");

mongoose
  .connect(
    config.MONGODB_URI
  )

  .then(() => {
    console.log("connected to MongoDB");
    app.listen(config.PORT, () => {
      console.log("server is running on port 3002");
    });
  })

  .catch((error) => {
    console.log("Connection failled", error.message);
  });
//index.js for db connectivity & application sever connectivity
