const bodyParser = require('body-parser'),
  express = require('express'),
  mongoose = require('mongoose');

app = express();
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
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log('Failed to find blogs');
    } else {
        res.render('index', {blogs:blogs});
    }
  });
});

let PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
