const sinon = require('sinon');
const expect = require('chai').expect;
const { ReviewsService } = require('../../backend/services/index');
const { Review } = require('../../backend/models');

describe('Reviews Service', () => {
  let createReviewStub;
  let findByIdStub;
  let findStub;

  beforeEach(() => {
    createReviewStub = sinon.stub(Review.prototype, 'save');
    findByIdStub = sinon.stub(Review, 'findById');
    findStub = sinon.stub(Review, 'find')
  });

  afterEach(() => {
    createReviewStub.restore();
    findStub.restore();
    findByIdStub.restore();
  });

  it('should create a review', async () => {
    createReviewStub.returnsThis();
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

    const createdReview = await ReviewsService.createReview('1', 'content', '3', '1');

    expect(createdReview).to.deep.equal({
      mbid: '1',
      content: 'content',
      rating: '3',
      author: {}
    });
  });
});