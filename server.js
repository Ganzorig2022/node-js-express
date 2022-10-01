const app = require('./app');

//==========================3. Start the SERVER=============================
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//package.json-ii scripts dr "start": "nodemon server.js" gej tohiruulna.

// then npm start (no longer the "nodemon app.js")
