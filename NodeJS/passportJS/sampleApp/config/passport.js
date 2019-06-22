const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/User');

//exporting function
module.exports = function (passport) {
  // passing passport from app.js
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          // error, user, msg
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        //passing password and hash password 
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err; // here be dragons
          if (isMatch) {
            return done(null, user); // no error and user 
          } else {
            return done(null, false, { message: 'Password incorrect' }); //error user and msg
          }
        });
      });
    })
  );

  // if authentication is successful the session will be established -->unique cookie
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
