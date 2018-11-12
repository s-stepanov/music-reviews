const { ReviewsService } = require('../services');

const createReview = async ctx => {
  try {
    const { review, album, artist } = ctx.request.body;

    const createdReview = await ReviewsService.createReview(review, album, artist);
    ctx.status = 201;
    ctx.body = {
      data: createdReview
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
};

const getReviewsForAlbum = async ctx => {
  try {
    const { mbid } = ctx.params;
    const reviews = await ReviewsService.getReviewsByAlbumMbid(mbid);
    ctx.status = 200;
    ctx.body = {
      data: reviews
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
};

module.exports = { createReview, getReviewsForAlbum };