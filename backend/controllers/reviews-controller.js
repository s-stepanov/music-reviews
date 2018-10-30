const { ReviewsService } = require('../services');

const createReview = async ctx => {
  try {
    const { mbid, content, rating, authorId } = ctx.request.body;
    const review = await ReviewsService.createReview(mbid, content, rating, authorId);
    ctx.status = 201;
    ctx.body = {
      data: review
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error };
  }
};

const getReviewsForAlbum = async ctx => {
  try {
    const { mbid } = ctx.params;
    const reviews = await ReviewsService.getReviewsForAlbum(mbid);
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