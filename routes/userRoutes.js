const express = require('express');

//importing get, post, patch, delete functions from '/controllers folder
const userController = require('./../controllers/userController');

//2. Assing to variables
const userRouter = express.Router();

//3. Then call it
userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
userRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
