const axios = require('axios');
const config = require('../config/config');

const LASTFM_API_URL = config.get('LASTFM_API_URL');
const LASTFM_API_KEY = config.get('LASTFM_API_KEY');

const searchArtist = async searchTerm => {
  const REQUEST_URL = `${LASTFM_API_URL}/?method=artist.search&artist=${searchTerm}&api_key=${LASTFM_API_KEY}&format=json`;
  const { data } = await axios.get(REQUEST_URL);

  if (!data.results) {
    return null;
  }

  return data.results.artistmatches.artist
    .map(artist => {
      return {
        mbid: artist.mbid,
        name: artist.name,
        listeners: artist.listeners,
        image: artist.image[3]['#text']
      };
    })
    .filter(artist => !!artist.mbid.length);
};

const getArtistInfoByMbid = async mbid => {
  const REQUEST_URL = `${LASTFM_API_URL}/?method=artist.getinfo&mbid=${mbid}&api_key=${LASTFM_API_KEY}&format=json`;

  const data = await axios.get(REQUEST_URL);

  if (!data) {
    return null;
  }

  const { artist } = data.data;

  return {

  }
};

module.exports = { searchArtist, getArtistInfoByMbid };