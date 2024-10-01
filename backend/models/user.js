const mongoose = require('mongoose');

//define schema

const userSchema = new mongoose.Schema({
    username:String,
    passwordHash:String,
    name:String,

})

module.exports = mongoose.model('User' , userSchema, 'users' ); 

