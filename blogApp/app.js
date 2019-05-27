const bodyParser = require('body-parser'),
  express = require('express'),
  mongoose = require('mongoose'),
  path = require('path'),
  expressSanitizer = require('express-sanitizer');
  methodOverride = require('method-override')

app = express();
app.use(express.static(path.join(__dirname, 'public')));
// App Congfig
mongoose.connect(
  'mongodb+srv://admin:NdTest-1_1@main-cluster-hpysy.mongodb.net/test?retryWrites=true',
  {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 2,
    reconnectInterval: 3000
  }
);
mongoose.set('useFindAndModify', false) //fixed random deprecation warning???

app.set('view engine', 'ejs');
//PUT method override
app.use(methodOverride('_method'))
// Mount express-sanitizer middleware here
app.use(expressSanitizer());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose/Model Config
let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now } // there should be a date if not default it
});

let Blog = mongoose.model('Blog', blogSchema);

//Restful Routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});
// INDEX ROUTE
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log('Failed to find blogs');
    } else {
      res.render('index', { blogs: blogs });
    }
  });
});

// NEW FORM
app.get('/blogs/new', function(req, res) {
  res.render('new');
});

// CREATE ROUTE
app.post('/blogs', function(req, res) {
  // create blog
  // console.log(req.body);
  // console.log('===========');
  // console.log(req.body);
  req.body.blog.body = req.sanitize(req.body.blog.body)
  Blog.create(req.body.blog), function(err, newBlog) {
    if (err) {
      res.render('new');
    } else {
      //then, redirect to the index
      res.redirect('/blogs');
    }
  };
});

// SHOW ROUTE
app.get('/blogs/:id', function(req, res) {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      console.log(err);
      res.redirect('/blogs');
    } else {
      res.render('show', { blog: foundBlog });
    }
  });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
  Blog.findById(req.params.id, function(err, foundBlog) {
    if (err) {
      console.log(err);
      res.redirect('/blogs');
    } else {
      res.render('edit', { blog: foundBlog });
    }
  });
});

// UPDATE ROUTE
app.put('/blogs/:id', function(req, res) {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(
    err,
    updatedBlog
  ) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect(`/blogs/${req.params.id}`);
    }
  });
});

// DELETE ROUTE
app.delete('/blogs/:id', function(req, res) {
  //destroy blog
  Blog.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
  //redirect somewhere
});

let PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
