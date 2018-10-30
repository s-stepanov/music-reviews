const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  mbid: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true
  },
  author: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.ObjectId
  }
});

module.exports = mongoose.model('Review', reviewSchema);