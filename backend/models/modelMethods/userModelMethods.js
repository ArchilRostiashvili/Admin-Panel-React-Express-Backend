const bcrypt = require('bcrypt');
const validator = require('validator');

const signupUser = async function(email, password, position, blocked, lastLogin){
    if(!password || !email){
        throw Error('All fields are required');
    } else if(!validator.isEmail(email)){
        throw Error('invalid email address');
    }

    const alredyExists = await this.findOne({email});

    if(alredyExists){
        throw Error('This mail is already registered');
    }

    const salt = await bcrypt.genSalt(7);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash, position, 
        blocked, lastLogin});

    return user;
}

const loginUser = async function(email, password){
    if(!password || !email){
        throw Error('All fields are required');
    }

    const user = await this.findOne({email});
    const matchingPassword = await bcrypt.compare(password, user.password);
    if(!user || !matchingPassword){
        throw Error('Incorrect email or password');
    }

    return user;
}

module.exports = {signupUser, loginUser};