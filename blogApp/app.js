const bodyParser = require('body-parser'),
  express = require('express'),
  mongoose = require('mongoose'),
  path = require('path');

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

app.set('view engine', 'ejs');
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
// all blogs
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log('Failed to find blogs');
    } else {
      res.render('index', { blogs: blogs });
    }
  });
});

app.get('/blogs/new', function(req, res) {
  res.render('new');
});


// CREATE ROUTE
app.post('/blogs', function(req, res) {
  // create blog
  console.log(req.body);
  console.log('===========');
  console.log(req.body);
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      res.render('new');
    } else {
      //then, redirect to the index
      res.redirect('/blogs');
    }
  });
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

let PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
