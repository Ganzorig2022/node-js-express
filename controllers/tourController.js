const fs = require('fs');

//====================== get json file from dev-data folder
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

//=================1. Check id is Valid=====================
exports.checkID = (req, res, next, val) => {
  //val ni "127.0.0.1:3000/api/v1/tours/2"
  console.log('tour id is', val); //id = 2
  //convert string to number
  const id = req.params.id * 1;

  //check if id is greater than tours array length or undefined

  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  //if id is VALID, then run below functions such as getAllTours, getTour etc...
  // if next() is not called, unable to run below functions...
  next();
};

//=================1. Check if post request body is Valid=====================
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'failed',
      message: 'Missing name or price',
    });
  }
  // if it's okay, then run createTour()
  next();
};

//==============================2. ROUTE HANDLERS==================================
//1. status(200) means success
//2. postman dr GET-> 127.0.0.1:3000/api/v1/tours -> SEND darhad json file irne.
// app.get('/api/v1/tours', getAllTours);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      //tours: tours bwal gantshan tours gej bichij bolno.
      tours: tours,
    },
  });
};

exports.getTour = (req, res) => {
  // 127.0.0.1:3000/api/v1/tours/5   -> {id:5} gej hewlene (on postman)
  // console.log(req.params);

  //convert string to number
  const id = req.params.id * 1;

  //filter tour from tours array by params. id
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      //tour: tour bwal gantshan tour gej bichij bolno.
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  //postman dr POST dr 127.0.0.1:3000/api/v1/tours
  // body->raw songood-> text gesniig JSON gej songood SEND darahad "DONE"-iig postman dr hewlene. Terminal dr body dr bichsen object-iig { name: 'Test Tour', duration: 10, difficulty: 'easy' } hewlene.
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tours here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  //status(204) means "no content"
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
