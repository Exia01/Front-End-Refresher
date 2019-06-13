const express = require('express');
(router = express.Router({ mergeParams: true })),
  (campService = require('../controllers/CampService.js')),
  (userMiddleware = require('../middleware/authUser.js'));

//comments new
router.get('/new', userMiddleware.isLoggedIn, (req, res) => {
  campService
    .camp_show(req) //pull camp from db
    .then(campground => {
      // console.log(campground)
      res.render('comments/comment_new', { campground: campground });
    }).catch(err => {
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
    }).catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds');
    });
});


//comment update form
router.get('/:comment_id/edit', usrMiddleware.isLoggedIn, (req, res) => {
  campService
    .comment_show(req)
    .then(data => {
      let campground = data[0];
      let comment = data[1];
      res.render('comments/comment_edit', {
        campground: campground,
        comment: comment
      });
    }).catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds');
    });
});


//comment update 
router.put('/:comment_id/edit', (req, res) => {
  let id = req.params._id
    campService
      .comment_update(req)
      .then(comment => {
        console.log(comment)
        res.redirect(`/campgrounds/${id}`);
      })
      .catch(err => {
        console.log('ERROR: ', err);
        res.redirect('/campgrounds', {});
      });
});



module.exports = router;
