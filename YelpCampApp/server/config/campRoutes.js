const path = require('path'),
  express = require('express');
(router = express.Router()),
  (camp_controller = require('../controllers/CampController')),
  (getCamps = require('../controllers/CampService'));

router.get('/', (req, res) => {
  res.render('camp_landing');
});

router.get('/test', camp_controller.campground_list);

router.get('/campgrounds', (req, res, next) => {
  let campgrounds = getCamps.camp_list();
  campgrounds
    .then(campgrounds => {
      res.render('camp_listing', { campgrounds });
    })

  // console.log(campgrounds)
  // res.render('camp_listing', { campgrounds });
});

router.post('/campgrounds', (req, res) => {
  // console.log(req.body);
  let name = req.body.name; // could move to dict directly
  let image = req.body.image;
  let tempCampgrounds = {
    name: name,
    image: image
  };
  campgrounds.push(tempCampgrounds);
  res.redirect('/campgrounds');
});

router.get('/campgrounds/new', (req, res) => {
  //get form data and add to database
  res.render('camp_new');
});

// app.get('/todo', (req, res) => {
//   res.render('todo')
// })

// /* API Semi-restful setup */
// app.get('/api/todos', TodoController.all)
// app.post('/api/todos', TodoController.create)
// app.delete('/api/todos/:id', TodoController.delete)

// /* Catch all */
// app.all('*', (req, res) => {
//   res.sendFile(path.resolve('./client/public/views/page_404.html'))
// })

//implement: https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
//info: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

module.exports = router;
