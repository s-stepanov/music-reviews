const axios = require('axios');
const config = require('../config/config');
const ReviewsService = require('./reviews-service');

const LASTFM_API_URL = config.get('LASTFM_API_URL');
const LASTFM_API_KEY = config.get('LASTFM_API_KEY');

const getAlbumInfoByMbid = async mbid => {
  const REQUEST_URL = `${LASTFM_API_URL}/?method=album.getinfo&mbid=${mbid}&api_key=${LASTFM_API_KEY}&format=json`;
  const [ albumResponse , rating ] = await Promise.all([axios.get(REQUEST_URL), getAverageRating(mbid)]);
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
    averageRating: rating,
    wiki: data.album.wiki
  };
};

const getAverageRating = async mbid => {
  const reviews = await ReviewsService.getReviewsForAlbum(mbid);
  return reviews.length > 0 ? reviews.reduce((sum, review) => sum + (+review.rating), 0) / reviews.length : null;
};

module.exports = { getAlbumInfoByMbid, getAverageRating };