const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  mbid: {
    type: String,
    required: true
  },
  averageRating: {
    type: String,
    required: false
  },
  artist: {
    type: mongoose.Schema.ObjectId,
    ref: 'Artist',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  wiki: {
    summary: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    required: false
  }
});

module.exports = mongoose.model('Album', albumSchema);