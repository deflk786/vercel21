const express = require('express');
const db = require('./routes/db'); 
const ejs = require('ejs');
const indexRouter = require('./routes/index');
const loadRouter = require('./routes/load');
const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');
const reqRouter = require('./routes/req');
const backendRouter = require('./routes/backend');


const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to pass the database connection to every route

app.use((req, res, next) => {
    req.db = db;

    next();
  });
  
app.use(express.static('public'));

// Define a route to run index page automode on 
app.use(express.urlencoded({ extended: true }));
app.use('/',indexRouter);
app.use('/load',loadRouter );
app.use('/login',loginRouter );
app.use('/home',homeRouter );
app.use('/req',reqRouter );
app.use('/backend',backendRouter);






// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});