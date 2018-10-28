const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('User', userSchema);