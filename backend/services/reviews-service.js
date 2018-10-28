const { Review } = require('./../models');

const createReview = async (mbid, content, score) => {
  let review = await new Review({
    mbid: mbid,
    content: content,
    score: score
  });

  review = await review.save();
  return review;
};

const getReviewsForAlbum = async (mbid) => {
  return await Review.find({ mbid });
};

module.exports = { createReview, getReviewsForAlbum };