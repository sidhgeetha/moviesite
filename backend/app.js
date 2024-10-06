// require express dependency

const express = require("express");

// import cors
const cors = require ('cors');

// require morgan for logging
const morgan = require("morgan");


// require cookie-parser for parsing cookies
const cookieParser = require("cookie-parser");

// create express server application
const app = express();

//import middleware

app.use(morgan('dev'));

app.use(cookieParser());



app.use(
  cors({
    origin: [
      
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());

const userRouter = require ('./routes/userRoutes');

//difine endpoints
app.use('/api/users' , userRouter)


//export app

module.exports = app;
