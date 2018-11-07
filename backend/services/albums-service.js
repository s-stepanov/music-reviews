const axios = require('axios');
const config = require('../config/config');
const { Album } = require('../models');

const LASTFM_API_URL = config.get('LASTFM_API_URL');
const LASTFM_API_KEY = config.get('LASTFM_API_KEY');

const getAlbumInfoByMbid = async mbid => {
  const REQUEST_URL = `${LASTFM_API_URL}/?method=album.getinfo&mbid=${mbid}&api_key=${LASTFM_API_KEY}&format=json`;

  const album = await findAlbumInDatabase(mbid);
  if (album) {
    return album;
  }

  const albumResponse = await axios.get(REQUEST_URL);
  const { data } = albumResponse;

  const template = new RegExp(`<a\\b[^>]*>(.*?)<\\/a>`);
  if (data.album.wiki) {
    data.album.wiki.content = data.album.wiki.content.replace(template, '');
    data.album.wiki.summary = data.album.wiki.summary.replace(template, '');
  }

  return {
    name: data.album.name,
    mbid: data.album.mbid,
    image: data.album.image[3]['#text'],
    averageRating: null,
    wiki: data.album.wiki
  };
};

const getTopRatedAlbums = async () => {
  return await Album.find({})
    .sort({'averageRating': 1})
    .limit(10);
};

const saveAlbumInDatabase = async (album, artistId) => {
  const { mbid, name, image, averageRating, wiki } = album;
  const albumToSave = await new Album({
    mbid,
    name,
    image,
    averageRating,
    wiki,
    artist: artistId
  });

  return albumToSave.save();
};

const findAlbumInDatabase = async mbid => {
  return await Album.findOne({
    mbid
  });
};

module.exports = {
  getAlbumInfoByMbid,
  saveAlbumInDatabase,
  findAlbumInDatabase,
  getTopRatedAlbums
};