const bcrypt = require('bcrypt');
const validator = require('validator');

const signupUser = async function(email, password, fullname, position, blocked, lastLogin){
    if(!password || !email || !fullname){
        throw Error('All fields are required');
    } else if(!validator.isEmail(email)){
        throw Error('invalid email address');
    }

    const alredyExists = await this.findOne({email});

    if(alredyExists !== null && alredyExists.blocked === true){
        throw Error ('This user was blocked by administrator ');
    }

    if(alredyExists){
        throw Error('This mail is already registered');
    }

    const salt = await bcrypt.genSalt(7);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash, fullname, position, 
        blocked, lastLogin});

    return user;
}

const loginUser = async function(email, password){

    if (!email || !password) {
        throw Error('All fields must be filled');
    }
    
    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Incorrect email or password');
    }
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect email or password');
    }
    
    if(user.blocked === true){
        throw Error ('This user was blocked by administrator ');
    }
    return user;
}

module.exports = {signupUser, loginUser};