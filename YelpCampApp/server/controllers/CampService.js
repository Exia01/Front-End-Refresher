// let CR = require('../controllers/CampController')
const Campground = require('../models/CampSchema');
const Comment = require('../models/CommentSchema');

class CampService {
  //index
  async camp_index() {
    try {
      const data = await Campground.find({});
      return data;
    } catch (e) {
      return e;
    }
  }

  //new
  async camp_new(req) {
    try {
      let camp = await new Campground(req.body);
      let author = {
        id:req.user._id,
        username: req.user.username,
      }
      camp.author = author
      let savedCamp = await camp.save();
      return savedCamp;
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return new MyError('Duplicate key', [err.message]);
      }
      console.log(err)
      return err;
    }
  }

  //show
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
  
  //update
  async camp_update(req) {
    try {
      const data = req.body.campground
      const camp = await Campground.findByIdAndUpdate(req.params.id, data)
      console.log("From inside the camp_update:", camp)
      let savedCamp = await camp.save();
      return savedCamp;
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return new MyError('Duplicate key', [err.message]);
      }
      // console.log(err)
      return err;
    }
  }
  async camp_delete(req) {
    try {
      const
      camp = await Campground.findOneAndRemove(req.params.id)
      return camp;
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return new MyError('Duplicate key', [err.message]);
      }
      // console.log(err)
      return err;
    }
  }

  //Comments
  async comment_new(req) {
    try {
      // // console.log(req.body)
      // console.log(req.user.username, req.user._id)
      let newComment = await Comment.create(req.body.comment);
      newComment.author.id = req.user._id;
      newComment.author.username = req.user.username;
      const comment = await newComment.save();
      const camp = await Campground.findById(req.params.id);
      let savingOp = await camp.comments.push(comment); // returns length of array
      // console.log(savingOp)
      return await camp.save();
    } catch (err) {
      return err;
    }
  }
}

module.exports = new CampService();
