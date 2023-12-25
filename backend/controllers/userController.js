const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createJWT = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'});
}

const signupUser = async (req, res)=>{
    const {email, password, position, blocked, lastlogin} = req.body;

    try{
        // const user = await User.signup(email, password, position, blocked, lastlogin);
        const user = await User.signup(email, password);
        
        const token = createJWT(user._id);
        res.status(200).json({email, token});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

const loginUser = async (req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password);
        const token = createJWT(user._id);
        res.status(200).json({email, token});
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {signupUser, loginUser};
