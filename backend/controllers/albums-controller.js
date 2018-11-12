const { AlbumsService } = require('../services');

const getAlbumInfoByMbid = async ctx => {
  const { mbid } = ctx.params;

  try {
    const album = await AlbumsService.getAlbumInfoByMbid(mbid);
    ctx.status = 200;
    ctx.body = {
      data: album
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      error
    };
  }
};

const getTopRatedAlbums = async ctx => {
  try {
    const albums = await AlbumsService.getTopRatedAlbums();
    ctx.body = {
      data: albums
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      error
    };
  }
};

module.exports = {
  getAlbumInfoByMbid,
  getTopRatedAlbums
};