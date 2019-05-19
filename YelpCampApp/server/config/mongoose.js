const mongoose = require('mongoose'),
  path = require('path'),
  fs = require('fs'),
  models = path.join(__dirname, '../models');

const mongooseConnection = async () => {
  await mongoose.connect(
    'mongodb+srv://admin:NdTest-1_1@main-cluster-hpysy.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true,
      autoReconnect: true,
      reconnectTries: 2,
      reconnectInterval: 3000
    }
  );
};
// const mongooseConnection = async () => {
//   await mongoose.connect('mongodb://localhost/cats',
//     {
//       useNewUrlParser: true,
//       autoReconnect: true,
//       reconnectTries: 2,
//       reconnectInterval: 3000
//     }
//   );
// };

//async file importer
fs.readdir(models, (err, files) => {
  if (err) {
    console.log('ERROR!!');
    console.log(err);
  } else {
    files.forEach(function(file) {
      // console.log('From Mongoose.js --> Model Loaded: ' + file)
    //     console.log(files)
    //   console.log(file.indexOf(file));
    //   console.log(file);
    //   console.log(file.length);
      if (file.indexOf('.js') >= 0) {
        require(models + '/' + file);
      }
    });
  }
});

module.exports = {
  mongooseConnection: mongooseConnection
};
