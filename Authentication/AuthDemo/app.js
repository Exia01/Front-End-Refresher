var express = require('express'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  bodyParser = require('body-parser'),
  User = require('./models/user'),
  LocalStrategy = require('passport-local'),
  passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/auth_demo_app', {
  useNewUrlParser: true,
  autoReconnect: true,
  reconnectTries: 2,
  reconnectInterval: 3000
});

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  //initialize, import, use and execute
  require('express-session')({
    secret: 'There is no secret',
    resave: false, //required
    saveUninitialized: false //required
  })
);
// These are needed every time we use passport with express
app.use(passport.initialize()); //enables use of passport
app.use(passport.session()); //creates session

passport.use(new LocalStrategy(User.authenticate()));// for the locl 
//Methods are important,reads serialize encoded data and writes encode serialized data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//============
// ROUTES
//============

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/secret', isLoggedIn, function(req, res) {
  res.render('secret');
});

// Auth Routes

//show sign up form
app.get('/register', function(req, res) {
  res.render('register');
});
//handling user sign up
app.post('/register', function(req, res) {
  User.register(
    new User({ username: req.body.username }), //make new obj no password
    req.body.password,//hash password and store in database
    function(err, user) {
      if (err) {
        console.log(err);
        return res.render('register');
        }//if no errors
        //this line logs the user in, it will handle the session and store the correct information and serialize with user method with "local" strategy, can change to others.
        passport.authenticate('local')(req, res, function () {
        //   console.log(user)
        res.redirect('/secret');
      });
    }
  );
});

// LOGIN ROUTES
//render login form
app.get('/login', function(req, res) {
  res.render('login');
});
//login logic
//middleware
app.post(
  '/login',//takes int the object 
  passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
  }),
  function(req, res) {}
);

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) { // 3 parameters, standard for middleware
  if (req.isAuthenticated()) { // the .isAuthenticated comes with passport
    return next(); // we check for login and if is not redirect below
  }
  res.redirect('/login');
}

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log('server started.......');
// });

let PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
