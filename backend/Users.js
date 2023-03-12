const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
var bcrypt= require ('bcryptjs');
var Jwt= require ('jsonwebtoken');
const userSchema = new mongoose.Schema({

    username:String,
    email: String,

    ContactNo: String,
    password: {
        type:String,
        select:false
    },
    confirmPassword:{
        type: String,
        select:false 

    },
    image:{
        data:Buffer,
        contentType:String
    },
    verified: Boolean


});


module.exports = mongoose.model('users', userSchema);