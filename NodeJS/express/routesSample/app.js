const express = require('express');
const app = express(); //creates "instance" of express

app.get('/', (req, res) => {
  //request, response
  res.send("Hi There!");
});
app.get('/speak/:animal', (req, res) => {
    let sound = {
        cow: "la vaca mu!",
        dog: "gua gua guao!",
        pig:"0ink!"
    }
    console.log(sound["animal"])
  res.send(sound[req.params.animal.toLowerCase()]);
});

app.get('/repeat/:str/:num', (req, res) => {
    req.params.str+= " "
    let num = req.params.num
    let str = req.params.str
    let newStr = str.repeat(num)
  res.send(newStr);
});

app.get('/dog', (req, res) => {
  //request, response
  res.send('Meow!!');
});
app.get('/r/:comments', (req, res) => {
  //request, response
  res.send('subsection!');
});
app.get('/r/:comments/:id', (req, res) => {
  //request, response
    console.log(req)
  res.send('subsection subsection!');
});
app.get('/r/:topic/:comments/:id/:title', (req, res) => {
  //request, response
    console.log(req)
    console.log(req.params.topic)
  res.send(`Welcome to the ${req.params.topic} topic`);
});
app.get('*', (req, res) => {
  //request, response
  res.send('Catch All !');
});
//goorm ide app.listen(process.evn.PORT, process.env.IP)
app.listen(8000, () => {
  console.log('Listening in port 8000');
});
