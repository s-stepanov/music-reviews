const axios = require('axios');
const config = require('../config/config');
const { Artist } = require('./../models');

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

const getArtistInfo = async (mbid, artistName) => {
  let ARTIST_REQUEST_URL;
  let ALBUMS_REQUEST_URL;
  if (artistName) {
    ARTIST_REQUEST_URL = `${LASTFM_API_URL}/?method=artist.getinfo&artist=${artistName}&api_key=${LASTFM_API_KEY}&format=json`;
    ALBUMS_REQUEST_URL = `${LASTFM_API_URL}/?method=artist.gettopalbums&artist=${artistName}&api_key=${LASTFM_API_KEY}&format=json`;
  } else {
    ARTIST_REQUEST_URL = `${LASTFM_API_URL}/?method=artist.getinfo&mbid=${mbid}&api_key=${LASTFM_API_KEY}&format=json`;
    ALBUMS_REQUEST_URL = `${LASTFM_API_URL}/?method=artist.gettopalbums&mbid=${mbid}&api_key=${LASTFM_API_KEY}&format=json`;
  }

  const [ artistResponse, albumsResponse ] = await Promise.all([axios.get(ARTIST_REQUEST_URL),
                                                                axios.get(ALBUMS_REQUEST_URL)]);
  const { artist } = artistResponse.data;
  const { topalbums } = albumsResponse.data;

  const template = new RegExp(`<a\\b[^>]*>(.*?)<\\/a>`);
  artist.bio.content = artist.bio.content.replace(template, '');
  artist.bio.summary = artist.bio.summary.replace(template, '');

  return {
    name: artist.name,
    mbid: artist.mbid,
    image: artist.image[3]['#text'],
    stats: artist.stats,
    bio: artist.bio,
    albums: topalbums.album.map(album => {
      return {
        name: album.name,
        mbid: album.mbid,
        artist: album.artist,
        image: album.image[3]['#text']
      };
    }).filter(album => !!album.mbid)
  };
};

const saveArtistInDatabase = async artist => {
  const createdArtist = new Artist({ ...artist });

  return createdArtist.save();
};

const findArtistInDatabase = async mbid => {
  return Artist.findOne({
    mbid: mbid
  });
};

module.exports = {
  searchArtist,
  getArtistInfo,
  saveArtistInDatabase,
  findArtistInDatabase
};