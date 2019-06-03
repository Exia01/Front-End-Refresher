const express           = require('express');
const path              = require('path');
const favicon           = require('express-favicon');
const bodyParser        = require('body-parser');
const PORT              = 8000;
const mongooseConnector = require('./server/config/mongoose');
const campRoutes        = require('./server/config/campRoutes');
const apiCampRoutes     = require('./server/config/apiCampRoutes')
  ;
const authUserRoutes     = require('./server/config/userAuthRoutes')
  ;
const passport          = require('passport')
// const seedDB = require('./server/config/seeds')
const app = express();

//Passport Configuration
app.use(
  require('express-session')({
    secret: 'This That Those Then True',
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session()); 

app.set('view engine', 'ejs');
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// views and static files
app.set('views', path.join(__dirname, '/client/public/views'));
app.use(express.static(path.join(__dirname, '/client/public/')));

//mongoose connection
mongooseConnector
  .mongooseConnection()
  .then(res => {
    console.log('Connected to DB \n');
    // seedDB()
  })
  .catch(err => {
    console.log('ERROR', err.message);
  });

// import controller
app.use('/api', apiCampRoutes);
app.use('/accounts', authUserRoutes);
app.use('/', campRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
