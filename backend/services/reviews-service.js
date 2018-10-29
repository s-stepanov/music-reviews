const { Review } = require('./../models');

const createReview = async (mbid, content, score, authorId) => {
  let review = await new Review({
    mbid: mbid,
    content: content,
    score: score,
    author: authorId
  });

  review = await review.save();
  return Review.findById(review._id).populate('author');
};

const getReviewsForAlbum = async (mbid) => {
  return await Review.find({ mbid }).populate('author');
};

module.exports = { createReview, getReviewsForAlbum };