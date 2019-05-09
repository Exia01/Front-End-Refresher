const express = require('express');
const app = express(); //creates "instance" of express
let apiModules = require('./callAPI.js');

app.set('view engine', 'ejs');
app.set('view engine', 'ejs');
app.get('/results', (req, res) => {
  apiModules
    .getMoviesAsync('virginia')
    .then(data => {
      res.send(data);
    })
    .catch(res.send('Error!!'));
});
// app.get('/results',(req, res)=> {
//     apiModules.getMovies('virginia', res);
// })

app.listen(8000, () => {
  console.log('Listening in port 8000');
});
