const axios = require('axios');
const config = require('../config/config');

const LASTFM_API_URL = config.get('LASTFM_API_URL');
const LASTFM_API_KEY = config.get('LASTFM_API_KEY');

const getAlbumInfoByMbid = async mbid => {
  const REQUEST_URL = `${LASTFM_API_URL}/?method=album.getinfo&mbid=${mbid}&api_key=${LASTFM_API_KEY}&format=json`;
  const { data } = await axios.get(REQUEST_URL);

  return {
    name: data.album.name,
    mbid: data.album.mbid,
    image: data.album.image[3]['#text'],
    wiki: data.album.wiki
  };
};

module.exports = { getAlbumInfoByMbid };