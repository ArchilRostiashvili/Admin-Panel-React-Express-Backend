const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const moment = require('moment');

const createJWT = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'});
}

const signupUser = async (req, res)=>{
    const {email, password, fullname, position} = req.body;

    try{
        const user = await User.signup(email, password, fullname, position);
        const token = createJWT(user._id);
        res.status(200).json({email, token});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}
////////////////////////
// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user exists'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!user) {
    return res.status(400).json({error: 'No such user exists'})
  }

  res.status(200).json(user)
}

const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    const date = moment().format();
    await User.findOneAndUpdate(
      { email: email },
      { lastlogin: date }
  );

    try{
      const user = await User.login(email, password);
      const token = createJWT(user._id);
      res.status(200).json({email, token, date});
    } catch(error){
      res.status(400).json({error: error.message});
    }
}
///////////////////////////
const getSingleUser = async (req, res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user exists'});
    }

    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({error: 'No such user exists'});
    }

    res.status(200).json(user);
}

const getAllUsers = async (req, res) => {
    const users = await User.find().sort({createdAt: -1});
    res.status(200).json(users);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such user exists'});
    }
  
    const user = await User.findOneAndDelete({_id: id});
  
    if (!user) {
      return res.status(400).json({error: 'No such user exists'});
    }
  
    res.status(200).json(user);
  }

module.exports = { signupUser, loginUser,
    getSingleUser,
    getAllUsers,
    deleteUser,
    updateUser
};
