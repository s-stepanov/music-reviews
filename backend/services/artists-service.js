'use strict';

const axios = require('axios');
const config = require('../config/config');

const searchArtist = async (searchTerm) => {
  const LASTFM_API_URL = config.get('LASTFM_API_URL');
  const LASTFM_API_KEY = config.get('LASTFM_API_KEY');
  const REQUEST_URL = `${LASTFM_API_URL}/?method=artist.search&artist=${searchTerm}&api_key=${LASTFM_API_KEY}&format=json`
  const response = await axios.get(REQUEST_URL);
  return response.data.results;
};

module.exports = { searchArtist };