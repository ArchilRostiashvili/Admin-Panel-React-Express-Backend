require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

// testing
const request = require("supertest");

// routes requests
userRoutes = require('./routes/user');

// exress app 
const app = express();

// middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log('path: ' + req.path, 'method: ' + req.method, 'req body: ' + req.body);
    next();
});

// routes
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGOURI)
 .then(()=>{
    app.listen(process.env.PORT, ()=>{console.log(`Connected to DB and listening on port ${process.env.PORT}`)});
 })
 .catch((err)=>{
    console.log(err);
 })
