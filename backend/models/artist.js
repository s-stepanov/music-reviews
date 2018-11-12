const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  mbid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Artist', artistSchema);