const { AlbumsService } = require('../services');

const getAlbumInfoByMbid = async ctx => {
  const { mbid } = ctx.params;

  try {
    const album = await AlbumsService.getAlbumInfoByMbid(mbid);
    ctx.body = {
      status: 200,
      data: album
    };
  } catch (e) {
    ctx.body = {
      status: 500,
      data: {},
      error: e
    };
  }
};

module.exports = { getAlbumInfoByMbid };