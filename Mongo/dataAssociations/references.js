const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo_2', {
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
  posts: [
    {
      // post attribute
      //syntax for arr of mongoose ID
      type: mongoose.Schema.Types.ObjectId,
      ref: Post
    }
  ] //list of post // array of posts
});

let User = mongoose.model('User', userSchema);

//Create user
// User.create(
//   {
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
//   },
//   function(err, user) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//   }
// );
// Post.create(
//   {
//     title: 'How to cook the best burger pt. 3',
//     content: 'YEaaa buddy'
//   },
//   function(err, post) {
//     if (err) {
//       console.log(err);
//     }
//     User.findOne({ email: 'bob@gmail.com' }, function(err, foundUser) {
//       if (err) {
//         console.log(err);
//       } else {
//           foundUser.posts.push(post);
//         // post is refering to the post created
//         //push this post reference onto the users
//         foundUser.save(function(err, data) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// );


// Find user
// find all posts for that user
/*we're finding a user then chain the populate the posts and then we start the query by exec*/
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

