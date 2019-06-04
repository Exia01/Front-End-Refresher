// const passport          = require('passport')
// const LocalStrategy     = require('passport-local')
// const User              = require('../models/UserSchema')

//   // passport setup
// passport.use(new LocalStrategy(User.authenticate()))
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// Login Middleware

//Login Middleware
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/accounts/login');
};

module.exports = {
  isLoggedIn: isLoggedIn
};
