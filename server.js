const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

//config.env setup hiine.
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//connect to mongodb database using "mongoose" package
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection is successful');
  });

//==========================3. Start the SERVER=============================
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//package.json-ii scripts dr "start": "nodemon server.js" gej tohiruulna.
//"start:prod": "NODE_ENV=production nodemon server.js",
// then npm start (no longer need to run the "nodemon app.js")

//================================MVC Architecture==========================
