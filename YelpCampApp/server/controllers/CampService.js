// let CR = require('../controllers/CampController')
const Campground = require('../models/CampSchema');
const Comment = require('../models/CommentSchema');

class CampService {
  async camp_index() {
    try {
      const data = await Campground.find({});
      return data;
    } catch (e) {
      return e;
    }
  }

  async camp_new(obj) {
    try {
      let camp = await new Campground(obj).save();
      return camp;
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send(new MyError('Duplicate key', [err.message]));
      }
      // console.log(err)
      return err;
    }
  }

  async camp_show(req) {
    try {
      let camp;
      camp = await Campground.findById(req.params.id)
        .populate('comments')
        .exec();
      // console.log(camp)
      return camp;
    } catch (err) {
      return err;
    }
  }

  //Comments
  async comment_new(req) {
    // console.log(req.body.comment)
      try {
        const newComment = await Comment.create(req.body.comment)
        const camp = await Campground.findById(req.params.id)
        let savingOp = await camp.comments.push(newComment) // returns length of array 
        // console.log(savingOp)
        return await camp.save()
      } catch (err) {
        return err;
      }
  }
}

module.exports = new CampService();
