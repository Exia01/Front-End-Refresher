const mongoose = require('mongoose');
//connect and use or connect and create
mongoose
  .connect('mongodb://localhost/cats', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.log('ERROR', err.message);
  });


//create schema for database
const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});


//turn into model with method
let Cat = mongoose.model('Cat', catSchema);

//add cat
let kitty = new Cat({
  name: 'Lily',
  age: 8,
  temperament: 'Mellow'
});

//saving with callback, err and obj that was save
// kitty.save((err, cat) => {
//     if (err) {
//         console.log("Oopsie!", err)
//     } else {
//         console.log("Saved to db", cat)
//     }
// })

//creates and saves
// Cat.create(kitty, (err, cat) => {
//     if (err) {
//         console.log("Oopsie!", err)
//     } else {
//         console.log("Saved to db", cat)
//     }
// })
// retrieving cats from db
Cat.find({}, (err, cats) => {
    if (err) {
        console.log("Error: \n", err)
    } else {
        console.log(cats)
    }
})
