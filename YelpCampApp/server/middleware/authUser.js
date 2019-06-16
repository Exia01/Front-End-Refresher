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
  req.flash("error", "Sorry, you need to be logged in to do that")
  return res.redirect('/accounts/login');
};

//checks for author of campground
userMiddleware.checkCampgroundOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCampground) {
      if (err) {
        req.flash("error", "Campground not found")
        res.redirect('back');
      } else {
        // does user own the campground?
        if (foundCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that")
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash("error", "Sorry, you need to be logged in to do that")
    res.redirect('back');
  }
};


// checks for author of comment
userMiddleware.checkCommentOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if (err) {
        req.flash("error", "Something went wrong")
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
