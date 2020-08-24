const mongoose = require('mongoose');

// Creation of Solution schema

const PostSchema = mongoose.Schema({
  comments: [{ type: String }],
  repoName: { type: String },
  repoLink: { type: String },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  posterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: { type: Number },
  likers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
