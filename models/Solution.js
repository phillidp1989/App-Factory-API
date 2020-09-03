const mongoose = require('mongoose');

// Creation of Solution schema

const SolutionSchema = mongoose.Schema({
  comments: [{ type: String }],
  repoName: { type: String },
  repoLink: { type: String },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  posterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: { type: Number },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Solution = mongoose.model('Solution', SolutionSchema);

module.exports = Solution;
