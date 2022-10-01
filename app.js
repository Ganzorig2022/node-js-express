//import packages
const express = require('express');
const morgan = require('morgan');
const app = express();

//importing routes functions from /routes folder
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//==============================1. MIDDLEWARE==================================
//MIDDLEWARE function is be able to MODIFY incoming request data

app.use(morgan('dev')); //"GET /api/v1/tours 200 10.500 ms - 8744" -> terminal dr request bolgonii status-iig console-dono.
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); //127.0.0.1:3000/overview.html

app.use((req, res, next) => {
  //new key nemew. "2022-10-01T05:52:14.012Z" - will be returned.
  req.requestTime = new Date().toISOString();
  next();
});

//==========================2. Mounting routers=================================
app.use('/api/v1/tours', tourRouter); //also middleware
app.use('/api/v1/users', userRouter);

module.exports = app;
