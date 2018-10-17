'use strict';

const { ArtistsService } = require('../services');

const searchArtist = async ctx => {
  const { term } = ctx.query;
  const artist = await ArtistsService.searchArtist(term);
  ctx.body = {
    status: 200,
    data: artist
  };
};

module.exports = { searchArtist };