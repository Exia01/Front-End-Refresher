const express = require('express');
(router = express.Router({mergeParams:true})),
  (campService = require('../controllers/CampService.js')),
  (userMiddleware = require('../middleware/authUser.js'));

//comments new 
router.get('/new', userMiddleware.isLoggedIn, (req, res) => {
  // console.log(req.params.id);
  campService
    .camp_show(req)
    .then(campground => {
      // console.log(campground)
      res.render('comments/comment_new', { campground: campground });
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds', {});
    });
});
//comments new
router.post('/new', userMiddleware.isLoggedIn, (req, res) => {
  campService
    .comment_new(req)
    .then(campground => {
      // console.log(`After comment created: ${campground}`);
      id = campground._id;
      // console.log(id)
      res.redirect(`/campgrounds/${id}`);
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds');
    });
});

module.exports = router;
