const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo', {
  useNewUrlParser: true,
  autoReconnect: true,
  reconnectTries: 2,
  reconnectInterval: 3000
});

//Post - title, content if embedding data, define first
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
let Post = mongoose.model('Post', postSchema);

//User - email and name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema] //list of post // array of posts
});

let User = mongoose.model('User', userSchema);

//Operations
// let newPost = new Post({
//     title: 'Reflections on Apples',
//     content: 'They are delicious'
//   });

// var newUser = new User({
//   email: 'charlieB@mail.com',
//   name: 'Charlie Brown'
// });
// //adding object to array
// newUser.posts.push({
//     title: "Dialing the phone",
//     content: "If no one answers the phone, dial louder!"
// });
// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({ name: 'Charlie Brown' }, function(err, user) {
  if (err) {
    console.log(err);
  } else {
    // find user and add attributes | need to implement await and es6
    if (user) {
      user.posts.push({
        title: '3 Things about trees',
        content: 'Christmas trees are fun.'
      });
      user.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(user);
        }
      });
      }
      else console.log("No user found")
  }
});


//https://stackoverflow.com/questions/10551313/mongodb-node-findone-how-to-handle-no-results
