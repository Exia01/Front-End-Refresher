// let CR = require('../controllers/CampController')
const Campground = require('../models/CampSchema');
const Comment = require('../models/CommentSchema');

class CampService {
  //index
  async camp_index() {
      const data = await Campground.find({});
      return data;
  
  }

  //new
  async camp_new(req, res, next) {
    let author = {
      id:req.user._id,
      username: req.user.username,
    }
      let data = req.body
      data.author = author
      let camp = await new Campground(req.body).save()
      newCamp = await camp.save()
      return newCamp
  }

  //show
  async camp_show(req) {
      let camp;
      camp = await Campground.findById(req.params.id)
        .populate('comments')
        .exec();
      // console.log(camp)
      return camp;
  }
  
  //update
  async camp_update(req) {
      const data = req.body.campground
      const camp = await Campground.findByIdAndUpdate(req.params.id, data)
      let savedCamp = await camp.save();
      return savedCamp;
  }

  //Delete
  async camp_delete(req) {
      const camp = await Campground.findOneAndRemove(req.params.id)
      return camp;
  }

  //Comments
  async comment_new(req) {
      let newComment = await Comment.create(req.body.comment);
      newComment.author.id = req.user._id;
      newComment.author.username = req.user.username;
      const comment = await newComment.save();
      const camp = await Campground.findById(req.params.id);
      let savingOp = await camp.comments.push(comment); // returns length of array
      // console.log(savingOp)
      return await camp.save();
  }
}


module.exports = new CampService();
