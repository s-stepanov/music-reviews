const { ArtistsService } = require('../services');

const searchArtist = async ctx => {
  console.log(ctx.req.user);
  const { artist } = ctx.query;
  try {
    const artists = await ArtistsService.searchArtist(artist);
    ctx.body = {
      status: 200,
      data: artists
    }
  } catch (e) {
    ctx.body = {
      status: 500,
      data: [],
      error: e
    }
  }
};

const getArtistInfoByMbid = async ctx => {
  const { mbid } = ctx.params;
  try {
    const data = await ArtistsService.getArtistInfoByMbid(mbid);
    ctx.body = {
      status: 200,
      data
    }
  } catch (e) {
    ctx.body = {
      status: 500,
      data: {},
      error: e
    }
  }
};

module.exports = { searchArtist, getArtistInfoByMbid };