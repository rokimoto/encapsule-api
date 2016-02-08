var mongoose = require('mongoose');

var CapsulePostSchema = mongoose.Schema({
  thought: {type: String},
  photo: {type: String},
  date: {type: Date},
  facebook_post_id: {type: String},
  instagram_post_id: {type: String},
  twitter_post_id: {type: String}
}, {timestamps: true});

var CapsulePost = mongoose.model('CapsulePost', CapsulePostSchema);



module.exports = CapsulePost;