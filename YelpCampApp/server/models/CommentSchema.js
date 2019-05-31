const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'No empty comments please'],
        minlength: [2, 'comment must be at least two characters'],
      },
    author: {
        type: String,
        required: [true, 'Author name must be at least two characters'],
        minlength: [2, 'Author name must be at least two characters'],
        maxlength: [64, 'Please keep Author name under 64 characters.']
      },
});
 
module.exports = mongoose.model("Comment", commentSchema);