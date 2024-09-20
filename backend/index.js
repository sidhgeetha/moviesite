// import mongoose

const mongoose = require("mongoose");

// const config = require("./utils/config");

console.log("connecting to MongoDB...");

const app = require("./app"); //connecting to MOongoDB

mongoose
  .connect(
    "mongodb+srv://sidhgeetha:Guvi2024@cluster0.gts1nzk.mongodb.net/loginpage1"
  )

  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3001, () => {
      console.log("server is running on port 3001");
    });
  })

  .catch((error) => {
    console.log("Connection failed", error.message);
  });
//index.js for db connectivity & application sever connectivity
