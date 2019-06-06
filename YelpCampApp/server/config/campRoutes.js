const path = require('path'),
  express = require('express');
(router = express.Router()),
  (camp_controller = require('../controllers/CampController.js')),
  (campService = require('../controllers/CampService.js')),
  (userMiddleware = require('../middleware/authUser.js'));

//Campground Routes
router.get('/', (req, res) => {
  res.render('camp_landing');
});

router.get('/campgrounds', (req, res, next) => {
  campService
    .camp_index()
    .then(campgrounds => {
       // let obj = {
      //   campgrounds: campgrounds,
      //   user: req.user
      // }
      res.render('campgrounds/camp_index', {campgrounds:campgrounds});
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.render('campgrounds/camp_index', {});
    });
});

router.post('/campgrounds', (req, res) => {
  campService
    .camp_new(req.body)
    .then(campground => {
      res.redirect('/campgrounds');
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds/new', {});
    });
});

router.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/camp_new');
});

router.get('/campgrounds/:id', (req, res) => {
  campService
    .camp_show(req)
    .then(campground => {
      // console.log(campground)
      res.render('campgrounds/camp_show', { campground: campground });
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds', {});
    });
});

//Comments Routes after camps because they are linked
router.get(
  '/campgrounds/:id/comments/new',
  userMiddleware.isLoggedIn,
  (req, res) => {
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
  }
);
router.post(
  '/campgrounds/:id/comments/',
  userMiddleware.isLoggedIn,
  (req, res) => {
    campService
      .comment_new(req)
      .then(campground => {
        // console.log(`After comment created: ${campground}`);
        id = campground._id;
        res.redirect(`/campgrounds/${id}`);
      })
      .catch(err => {
        console.log('ERROR: ', err);
        res.redirect('/campgrounds');
      });
  }
);

//implement: https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
//info: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

module.exports = router;
