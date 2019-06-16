//Login Middleware
const Campground = require('../models/CampSchema');
const Comment = require('../models/CommentSchema');


var userMiddleware = {};

// checks if user is logged in
userMiddleware.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  // console.log(req.headers.referer)
  // console.log(req.url)
  req.session.redirectUrl = req.originalUrl
  req.flash("error", "Please login first.")
  return res.redirect('/accounts/login');
};

//checks for author of campground
userMiddleware.checkCampgroundOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCampground) {
      if (err) {
        res.redirect('back');
      } else {
        // does user own the campground?
        if (foundCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          console.log('nope');
          res.redirect('back');
        }
      }
    });
  } else {
    res.redirect('back');
  }
};


// checks for author of comment
userMiddleware.checkCommentOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if (err) {
        res.redirect('back');
      } else {
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          res.redirect('back');
        }
      }
    });
  } else {
    res.redirect('back');
  }
};
module.exports = userMiddleware;
