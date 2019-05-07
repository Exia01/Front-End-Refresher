const express = require('express');
const path = require('path');
const app = express(); //creates "instance" of express


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));


app.get('/', (req, res) => {
  //request, response
  res.render('home');
});
app.get('/cute/:dog', (req, res) => {
  let dog = req.params.dog;
  res.render('param-page', {dog:dog});
});

app.listen(8000, () => {
  console.log('Listening in port 8000');
});
