let mongoose = require("mongoose");

// POST - title, content
let postSchema = new mongoose.Schema({
   title: String,
   content: String
});
//sending out this file 
module.exports = mongoose.model("Post", postSchema); //if not sure and imported somewhere else. nothing is imported. 


//could also do:
/*
 let Post = mongoose.model("Post", postSchema)
 module.exports = Post
*/