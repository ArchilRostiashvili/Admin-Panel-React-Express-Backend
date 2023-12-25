const mongoose = require('mongoose');
const {signupUser, loginUser} = require('./modelMethods/userModelMethods');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
    ,
    position:{
        type: String,
        required: true,
        default: '-'
    },
    blocked:{
        type: Boolean,
        default: false
    },
    lastlogin:{
        type: Date,
        default: Date.now
    }
})

// signup method
userSchema.statics.signup = signupUser;
userSchema.statics.login = loginUser;

module.exports = mongoose.model('User', userSchema);