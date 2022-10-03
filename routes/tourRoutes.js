const express = require('express');

//importing get, post, patch, delete functions from '/controllers folder
const tourController = require('./../controllers/tourController');

//2. Assing to variables
const tourRouter = express.Router();

//check id is valid on "127.0.0.1:3000/api/v1/tours/2"
// tourRouter.param('id', tourController.checkID);

//3. Then call it
tourRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
tourRouter
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRouter;
