const { ReviewsService } = require('../services');

const createReview = async ctx => {
  try {
    const { mbid, content, score } = ctx.request.body;
    const review = await ReviewsService.createReview(mbid, content, score);
    ctx.body = {
      status: 201,
      data: review
    };
  } catch (e) {
    ctx.body = {
      status: 500,
      error: e
    }
  }
};

module.exports = { createReview };