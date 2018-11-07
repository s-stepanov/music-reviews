const { Review, Album } = require('./../models');
const ArtistsService = require('./artists-service');
const AlbumsService = require('./albums-service');

const createReview = async (review, album, artist) => {
  const { mbid, content, rating, authorId } = review;

  let reviewToSave = new Review({
    mbid,
    content,
    rating,
    author: authorId
  });

  if (!await AlbumsService.findAlbumInDatabase(mbid)) {
    let artistInDb = await ArtistsService.findArtistInDatabase(album.mbid);
    if (!artistInDb) {
      artistInDb = await ArtistsService.saveArtistInDatabase(artist);
    }
    await AlbumsService.saveAlbumInDatabase(album, artistInDb._id);
  }

  review = await reviewToSave.save();
  await updateAverageRating(mbid);

  return Review.findById(review._id).populate('author');
};

const getReviewsByAlbumMbid = async (mbid) => {
  return await Review.find({ mbid }).populate('author');
};

const updateAverageRating = async (mbid) => {
  const reviews = await getReviewsByAlbumMbid(mbid);
  const rating = reviews.length > 0 ? reviews.reduce((sum, review) => sum + (+review.rating), 0) / reviews.length : null;
  return Album.update({ mbid }, { $set: { averageRating: rating }});
};

module.exports = {
  createReview,
  getReviewsByAlbumMbid,
  updateAverageRating
};