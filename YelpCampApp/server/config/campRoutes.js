const express = require('express');
(router = express.Router()),
// (router = require('express-promise-router')()),
  (campService = require('../controllers/CampService.js')),
  (userMiddleware = require('../middleware/authUser.js'));

//landing
router.get('/', (req, res) => {
  res.render('camp_landing');
});

//index
router.get('/campgrounds', (req, res) => {
  campService
    .camp_index()
    .then(campgrounds => {
      res.render('campgrounds/camp_index', { campgrounds: campgrounds });
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.render('campgrounds/camp_index', {});
    });
});

// create form
router.get('/campgrounds/new',  userMiddleware.isLoggedIn, (req, res) => {
  res.render('campgrounds/camp_new');
});

//create
router.post('/campgrounds',userMiddleware.isLoggedIn,(req, res) => {
  campService
    .camp_new(req)
    .then(campground => {
      console.log("From then section:" , campground)
      res.redirect('/campgrounds');
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.redirect('/campgrounds/new', {});
    });
});

//show
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

module.exports = router;

//implemented: https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
//info: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
