const Tour = require('./../models/tourModel');

//==============================2. ROUTE HANDLERS==================================
//1. status(200) means success
//2. postman dr GET-> 127.0.0.1:3000/api/v1/tours -> SEND darhad json file irne.
// app.get('/api/v1/tours', getAllTours);

exports.getAllTours = async (req, res) => {
  try {
    //mongoose find() method returns all documents
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour: tour,
      },
    });
    s;
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    //bad request
    res.status(400).json({
      status: 'failed',
      message: 'Invalid data sent!',
    });
  }

  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);

  // tours.push(newTour);
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

// const fs = require('fs');

// //====================== get json file from dev-data folder
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// //=================1. Check id is Valid=====================
// exports.checkID = (req, res, next, val) => {
//   //val ni "127.0.0.1:3000/api/v1/tours/2"
//   console.log('tour id is', val); //id = 2
//   //convert string to number
//   const id = req.params.id * 1;

//   //check if id is greater than tours array length or undefined

//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   //if id is VALID, then run below functions such as getAllTours, getTour etc...
//   // if next() is not called, unable to run below functions...
//   next();
// };
