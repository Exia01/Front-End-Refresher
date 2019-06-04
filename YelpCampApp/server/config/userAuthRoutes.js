const path = require('path'),
  express = require('express');
(router = express.Router()),
  (camp_controller = require('../controllers/CampController.js')),
  (userController = require('../controllers/AuthUserController.js')),
  (campService = require('../controllers/CampService.js')),
  (userService = require('../controllers/AuthUserService'));

const passport          = require('passport')
const LocalStrategy     = require('passport-local')
const User              = require('../models/UserSchema')

  // passport setup
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Auth Routes

//register form
router.get('/register', (req, res) => {
  res.render('accounts/user_register');
});

//sign up logic
router.post('/register', (req, res, next) => {
  let password = req.body.password
  let newUser = new User({username: req.body.username})
  User.register(newUser, password, (err, user) => {
    if (err) {
      console.log(err)
      return res.render('accounts/user_register');
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect('/campgrounds')
    })
  })
})
module.exports = router;

//login form
router.get('/login', (req, res) => {
  res.render('accounts/user_login')
})
//login logic
router.post("/login", passport.authenticate("local", {
  successRedirect: "/campgrounds",
  failureRedirect:"/accounts/login",
}),(req, res)=>{
  
})