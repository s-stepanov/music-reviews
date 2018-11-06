const sinon = require('sinon');
const expect = require('chai').expect;
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const config = require('../../backend/config/config');
const LASTFM_API_URL = config.get('LASTFM_API_URL');
const { AlbumsService, ReviewsService } = require('../../backend/services/index');

describe('albums-service', () => {
  let getReviewsStub;
  let httpMock;

  beforeEach(() => {
    getReviewsStub = sinon.stub(ReviewsService, 'getReviewsForAlbum');
    httpMock = new MockAdapter(axios);
    httpMock.onGet(new RegExp(LASTFM_API_URL)).reply(200, {
      album: {
        name: 'name',
        mbid: '1',
        image: [ { text: '' }, { text: '' }, { text: '' }, { text: '' } ],
        wiki: {
          summary: '',
          content: ''
        }
      }
    });
  });

  afterEach(() => {
    httpMock.restore();
    getReviewsStub.restore();
  });

  it('should get albums by mbid', async () => {
    getReviewsStub.returns([]);
    const expected = {
      name: 'name',
      mbid: '1',
      image: undefined,
      averageRating: null,
      wiki: {
        summary: '',
        content: ''
      }
    };

    const albumInfo = await AlbumsService.getAlbumInfoByMbid('1');

    expect(albumInfo).to.deep.equal(expected);

    getReviewsStub.restore();
  });

  it('should calculate average rating', async () => {
    getReviewsStub.returns([{
      mbid: '1',
      content: 'content',
      rating: '5',
      author: {}
    }, {
      mbid: '1',
      content: 'anotherContent',
      rating: '10',
      author: {}
    }]);
    let rating = await AlbumsService.getAverageRating('1');
    expect(rating).to.equal(7.5);

    getReviewsStub.returns([]);
    rating = await AlbumsService.getAverageRating('1');
    expect(rating).to.equal(null);

    getReviewsStub.restore();
  });
});