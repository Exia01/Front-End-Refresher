const path = require('path');
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //imports it

app.use(bodyParser.urlencoded({extended: true})); //makes usage for forms
app.set('views', path.join(__dirname, '/public/views'));
app.set("view engine", "ejs");

let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/addfriend", (req, res)=>{
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(8000, () => {
  console.log('Listening in port 8000');
});