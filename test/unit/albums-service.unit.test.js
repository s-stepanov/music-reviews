const sinon = require('sinon');
const expect = require('chai').expect;
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const config = require('../../backend/config/config');
const LASTFM_API_URL = config.get('LASTFM_API_URL');
const { AlbumsService } = require('../../backend/services/');
const { Album } = require('../../backend/models');

describe('Albums Service', () => {
  let findAlbumInDatabaseStub;
  let httpMock;

  beforeEach(() => {
    findAlbumInDatabaseStub = sinon.stub(Album, 'findOne');
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
    findAlbumInDatabaseStub.restore();
  });

  describe('getAlbumInfoByMbid()', () => {
    it('should fetch album by mbid if it is not presented in db', async () => {
      findAlbumInDatabaseStub.returns(false);
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
    });

    it('should return album info for album presented in database', async () => {
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
      findAlbumInDatabaseStub.returns({
        name: 'name',
        mbid: '1',
        image: undefined,
        averageRating: null,
        wiki: {
          summary: '',
          content: ''
        }
      });
      const albumInfo = await AlbumsService.getAlbumInfoByMbid('1');

      expect(albumInfo).to.deep.equal(expected);
    });
  });
});