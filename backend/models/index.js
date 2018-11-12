const Mongoose = require('mongoose');
const config = require('../config/config');
Mongoose.Promise = require('bluebird');

const DATABASE_URL = config.get('DATABASE_URL');
const APP_NAME = config.get('NAME');

const connect = async () => {
  try {
    let mongoose = await Mongoose.connect(DATABASE_URL,
      { dbName: APP_NAME,
        useNewUrlParser: true });
    if (config.get('NODE_ENV') === 'development') {
      for (let collection in mongoose.connection.collections) {
        Mongoose.connection.collections[collection].deleteOne(() => {});
      }
    }
    return mongoose;
  } catch (e) {
    console.error(e);
  }
};

const User = require('./user');
const Review = require('./review');
const Artist = require('./artist');
const Album = require('./album');

module.exports = { connect, User, Review, Album, Artist };