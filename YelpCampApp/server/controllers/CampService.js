// let CR = require('../controllers/CampController')
const Campground = require('../models/CampSchema');

class CampService {
  async camp_index() {
    try {
      const data = await Campground.find({});
      return data;
    } catch (e) {
      return e;
    }
  }

  async camp_new (obj){
    try {
      let camp = await new Campground(obj).save();
      return camp
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send(new MyError('Duplicate key', [err.message]));
      }
      // console.log(err)
      return err;
    }
  };
}

module.exports = new CampService();
