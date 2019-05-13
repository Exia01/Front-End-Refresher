const express = require('express');
const app = express(); //creates "instance" of express
let apiModules = require('./callAPI.js');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render("search")
});
app.get('/results', (req, res) => {
  // console.log(req) //figure out param
  let term = req.query.search
  apiModules
    .getMoviesAsync(term)
    .then(data => {
      let movies = data.Search
      // console.log(movies)
      res.render("results", {movies});
    })
    .catch(err => {
      res.status(400).send(err);
    });
});
// app.get('/results',(req, res)=> {
//     apiModules.getMovies('virginia', res);
// })

app.listen(8000, () => {
  console.log('Listening in port 8000');
});