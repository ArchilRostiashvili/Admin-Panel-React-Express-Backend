require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

// exress app 
const app = express();

// cors
const cors = require('cors');

app.use(cors({
   origin: '*',
}));


// routes requests
userRoutes = require('./routes/user');


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
