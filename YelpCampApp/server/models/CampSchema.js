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
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

/* Export MODEL -> collection name with schema*/
const Campground = mongoose.model('Campground', CamgroundSchema);