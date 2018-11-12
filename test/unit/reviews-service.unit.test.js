const sinon = require('sinon');
const expect = require('chai').expect;
const { ReviewsService } = require('../../backend/services/index');
const { Review, Artist, Album } = require('../../backend/models');

describe('Reviews Service', () => {
  let createReviewStub;
  let findByIdStub;
  let findStub;
  let getReviewsStub;
  let findArtistStub;
  let saveArtistStub;
  let findAlbumStub;
  let saveAlbumStub;
  let updateRatingStub;

  beforeEach(() => {
    createReviewStub = sinon.stub(Review.prototype, 'save');
    findByIdStub = sinon.stub(Review, 'findById');
    findStub = sinon.stub(Review, 'find');
    getReviewsStub = sinon.stub(ReviewsService, 'getReviewsByAlbumMbid');
    updateRatingStub = sinon.stub(Album, 'update');
    findArtistStub = sinon.stub(Artist, 'findOne');
    saveArtistStub = sinon.stub(Artist.prototype, 'save');
    saveAlbumStub = sinon.stub(Album.prototype, 'save');
    findAlbumStub = sinon.stub(Album, 'findOne');
  });

  afterEach(() => {
    createReviewStub.restore();
    findStub.restore();
    findByIdStub.restore();
    getReviewsStub.restore();
    findAlbumStub.restore();
    findArtistStub.restore();
    saveArtistStub.restore();
    saveAlbumStub.restore();
    updateRatingStub.restore();
  });

  it('should create a review if album is presented in db', async () => {
    createReviewStub.returnsThis();
    findAlbumStub.returns(true);
    getReviewsStub.returns([]);
    updateRatingStub.returns(null);
    findStub.returns({
      populate: () => {
        return {
          mbid: '1',
          content: 'content',
          rating: '3',
          author: {},
        }
      }
    });
    findByIdStub.returns({
      populate: () => {
        return {
          mbid: '1',
          content: 'content',
          rating: '3',
          author: {},
        }
      }
    });

    const createdReview = await ReviewsService.createReview({
      mbid: '1',
      content: 'content',
      rating: '3',
      author: '1'
    }, {}, {});

    expect(createdReview).to.deep.equal({
      mbid: '1',
      content: 'content',
      rating: '3',
      author: {}
    });
  });
});