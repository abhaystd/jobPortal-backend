
const mongoose = require("mongoose");
const validate = require('validator');
const { default: isEmail } = require("validator/lib/isEmail");
const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true,'please enter your first name']
    },
    lastName: {
        type:String,
        required:[true,'please enter your last name']
    },
    email:{
        type:String,
        required:[true,'please enter first your email'],
        validate:[isEmail,'please enter correct email']

    },
    password: {
        type:String,
        required:true,
        // minlength:[6,'please inter minimum 6 character ']
    },
    conformPassword: {
        type:String,
        // required:true,
        // minlength:[6,'please inter minimum 6 character ']
    },
    resume:{
        type:String,
        required:true
    }
    
})


module.exports = mongoose.model('User',userSchema);