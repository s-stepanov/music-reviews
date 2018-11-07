const { ArtistsService } = require('../../backend/services');
const axios = require('axios');
const expect = require('chai').expect;
const config = require('../../backend/config/config');
const LASTFM_API_URL = config.get('LASTFM_API_URL');
const MockAdapter = require('axios-mock-adapter');

describe('Artists Service', () => {
  let httpMock;

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    httpMock.onGet(new RegExp(LASTFM_API_URL)).reply(200, {
      results: {
        artistmatches: {
          artist: [{
            mbid: '1',
            name: 'name',
            listeners: '4',
            image: [{}, {}, {}, {}]
          }]
        }
      }
    });
  });

  afterEach(() => {
    httpMock.restore();
  });

  it('should search artist by search term', async () => {
    const artist = await ArtistsService.searchArtist('a');

    expect(artist).to.deep.equal([{
      mbid: '1',
      name: 'name',
      listeners: '4',
      image: undefined
    }]);
  });

  it('should return artist info by mbid', () => {

  });
});

