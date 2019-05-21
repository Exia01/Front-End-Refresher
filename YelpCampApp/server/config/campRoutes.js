const path = require('path'),
  express = require('express');
  (router = express.Router()),
  (camp_controller = require('../controllers/CampController.js')),
  (campService = require('../controllers/CampService.js'));

router.get('/', (req, res) => {
  res.render('camp_landing');
});

router.get('/campgrounds', (req, res, next) => {
  campService
    .camp_index()
    .then(campgrounds => {
      res.render('camp_listing', { campgrounds });
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.render('camp_listing', {});
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
  res.render('camp_new');
});

router.get('/campgrounds/:id', (req, res) => {
  //Find the campground with the provided ID 
  // render show template with that campground
  res.render('camp_new');
});



//implement: https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
//info: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

module.exports = router;
