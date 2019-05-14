const path = require('path');

let campgrounds = [
  {
    name: 'Salmon Creek',
    image: 'https://farm3.staticflickr.com/2419/5776844314_f1e5e32455_b.jpg'
  },
  {
    name: 'Granite Hill',
    image: 'https://farm5.staticflickr.com/4109/5047311934_5e8d381431_b.jpg'
  },
  {
    name: 'Schaols',
    image: 'https://farm1.staticflickr.com/661/21678833820_05b6916c70_b.jpg'
  },
  {
    name: 'Seekant',
    image: 'https://farm1.staticflickr.com/246/452757111_590bd9fd7c_b.jpg'
  },
];

/* Exporting function which takes in the app (server.js :ln 10) handles all the requests */
module.exports = app => {
  app.get('/', (req, res) => {
    res.render('camp_landing');
  });

  app.get('/campgrounds', (req, res) => {
    res.render('camp_listing', { campgrounds });
  });

  app.post('/campgrounds', (req, res) => {
    console.log(req.body)
    let name = req.body.name; // could move to dict directly
    let image = req.body.image;
    let tempCampgrounds = {
      name: name,
      image: image
    };
    campgrounds.push(tempCampgrounds);
    res.redirect('/campgrounds');
  });

  app.get('/campgrounds/new', (req, res) => {
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
};
