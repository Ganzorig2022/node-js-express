const mongoose = require('mongoose');

//======================MONGOOSE SCHEMA and MODEL===============================
//in order to CRUD operation, we should create new SCHEMA for MODEL
//Rule-1. Ali neg key ni bhgv tohioldold database-ruu save-legdehgv aldaa zaadag.
//Jishee ni:"name" key ogt bhgv bwal...
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

//then create MODEL. (model name must be Uppercase)
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
