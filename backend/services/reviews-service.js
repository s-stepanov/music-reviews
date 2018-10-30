const { Review } = require('./../models');

const createReview = async (mbid, content, rating, authorId) => {
  let review = await new Review({
    mbid,
    content,
    rating,
    author: authorId
  });

  review = await review.save();
  return Review.findById(review._id).populate('author');
};

const getReviewsForAlbum = async (mbid) => {
  return await Review.find({ mbid }).populate('author');
};

module.exports = { createReview, getReviewsForAlbum };