const { ArtistsService } = require('../services');

const searchArtist = async ctx => {
  const { artist } = ctx.query;
  try {
    const artists = await ArtistsService.searchArtist(artist);
    ctx.status = 200;
    ctx.body = {
      data: artists
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      error
    }
  }
};

const getArtistInfoByMbid = async ctx => {
  const { mbid } = ctx.params;
  try {
    const data = await ArtistsService.getArtistInfoByMbid(mbid);
    ctx.status = 200;
    ctx.body = {
      data
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      error
    }
  }
};

module.exports = { searchArtist, getArtistInfoByMbid };