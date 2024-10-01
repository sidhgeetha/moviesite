// require express dependency

const express = require("express");
const app = express();

// create express server application

//import middleware

const cors = require('cors');
const morgan =  require('morgan');
const cookieParser = require("cookie-parser");

app.use(morgan('dev'));
app.use(cookieParser());



app.use(cors())

app.use(express.json());

const userRouter = require ('./routes/userRoutes');

//difine endpoints
app.use('/api/users' , userRouter)


//export app

module.exports = app;
