let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo_2', {
  useNewUrlParser: true,
  autoReconnect: true,
  reconnectTries: 2,
  reconnectInterval: 3000
});

let Post = require('./models/post');
let User = require('./models/user');

Post.create({
  title: "How to cook the best burger pt. 4",
  content: "Eat more Chickennn"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// Find user
// find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });
