const { ReviewsService } = require('../services');

const createReview = async ctx => {
  try {
    const { mbid, content, score, authorId } = ctx.request.body;
    const review = await ReviewsService.createReview(mbid, content, score, authorId);
    ctx.body = {
      status: 201,
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