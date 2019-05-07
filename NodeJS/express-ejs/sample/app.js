const express = require('express');
const path = require('path');
const app = express(); //creates "instance" of express

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));
app.use(express.static("public/assets/css"));

app.get('/', (req, res) => {
  //request, response
  res.render('home');
});

app.get('/cute/:dog', (req, res) => {
  let dog = req.params.dog;
  res.render('param-page', { dog: dog });
});

app.get('/posts', function(req, res) {
  let posts = [
    { title: 'Post 1', author: 'susie' },
    { title: 'The Spider and the Bee', author: 'Harry the clown' },
    { title: 'Avengers Game', author: 'Marvel Not really series' },
    { title: 'Post 4', author: 'susie' }
  ];
  res.render("posts", {posts:posts})
});

app.listen(8000, () => {
  console.log('Listening in port 8000');
});
