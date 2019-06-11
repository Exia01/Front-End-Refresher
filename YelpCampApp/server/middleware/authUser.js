// const passport          = require('passport')
// const LocalStrategy     = require('passport-local')
// const User              = require('../models/UserSchema')

//   // passport setup
// passport.use(new LocalStrategy(User.authenticate()))
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// Login Middleware

//Login Middleware
const Campground = require('../models/CampSchema');
var userMiddleware = {};
userMiddleware.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/accounts/login');
};

userMiddleware.checkCampgroundOwnership = function(req, res, next) {
  if(req.isAuthenticated()){
         Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                res.redirect("back");
            }  else {
                // does user own the campground?
             if(foundCampground.author.id.equals(req.user._id)) {
                 next();
             } else {
                 console.log("nope")
                 res.redirect("back");
             }
            }
         });
     } else {
         res.redirect("back");
     }
 }
 module.exports = userMiddleware;