// require express dependency

const express = require("express");

// create express server application

//import middleware

const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json());

const userRouter = require ('./routes/userRoutes');

//difine endpoints
app.use('/api/users' , userRouter)


//export app

module.exports = app;
