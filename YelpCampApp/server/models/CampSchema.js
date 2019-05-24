const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Define Model (Blueprint) */
const CamgroundSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Campground must be at least two characters'],
      minlength: [2, 'Campground must be at least two characters'],
      maxlength: [64, 'Please keep Campground item under 64 characters.']
    },
    description: {
      type: String,
      required: [true, 'description must be at least two characters'],
      minlength: [2, 'description must be at least two characters'],
      maxlength: [84, 'Please keep the description item under 84 characters.']
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// let Campground = mongoose.model('Campground', CamgroundSchema)
// Campground.create({
//   name: 'Lily Meadow',
//   description: 'A quite spot by a roomie hill with a nice Lake View',
//   image: 'https://farm1.staticflickr.com/217/515963182_c48a9bb10e_b.jpg'
// });
/* Export MODEL -> collection name with schema*/
module.exports = mongoose.model('Campground', CamgroundSchema );