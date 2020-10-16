const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
//import route files
const bookRoutes = require('./routes/bookRoute');
const app = express();

//connect mongoDB
mongoose.connect('mongodb://localhost:27017/api-assignment', {useNewUrlParser: true , useUnifiedTopology: true})
.then(()=> {
  console.log('DB connected!');
})
.catch(()=>{
  console.log('DB connection Faild!');
});


//use body-parser to pass the json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//allow to access the backend images to fontend

//giving allow the headers
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();

});

//requests from Front-End Divided
app.use("/api/book",bookRoutes);

module.exports = app;
