const mongoose = require('mongoose');

// Creation of Post schema

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true,
    max: 200
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  technologies: [{ type: String }],
  score: {
    type: Number
  },
  posterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activeDevelopers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
