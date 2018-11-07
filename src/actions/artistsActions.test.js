import * as actions from './artistsActions';
import * as actionTypes from './actionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const httpMock = new MockAdapter(axios);

httpMock.onGet(/\/api\/artist\/\d+/).reply(200, {
  data: {
    artist: 'artist'
  }
});

httpMock.onGet(/\/api\/artist\/\?artist=\w+/).reply(200, {
  data: [
    { artist: 'artist' }, { artist: 'artist2' }
  ]
});

describe('Artist actions', () => {
  it('should perform a request to fetch artist info', () => {
    const store = mockStore({});

    return store.dispatch(actions.getArtistInfo('1'))
      .then(() => {
        const mockStoreActions = store.getActions();
        expect(mockStoreActions[0]).toEqual(actions.fetchArtistInfo());
        expect(mockStoreActions[1]).toEqual(actions.artistInfoFetched({
          data: { artist: 'artist' }
        }));
      });
  });

  it('should perform a request to fetch artists list', () => {
    const store = mockStore({});

    return store.dispatch(actions.searchArtists('term'))
      .then(() => {
        const mockStoreActions = store.getActions();
        expect(mockStoreActions[0]).toEqual(actions.fetchArtistsList());
        expect(mockStoreActions[1]).toEqual(actions.artistsListFetched({
          data: [
            { artist: 'artist' }, { artist: 'artist2' }
          ]
        }));
      });
  });

  it('should create an action to fetch artist', () => {
    const expected = {
      type: actionTypes.FETCH_ARTIST_INFO,
    };
    expect(actions.fetchArtistInfo()).toEqual(expected);
  });

  it('should create an action representing artist info successful fetch', () => {
    const expected = {
      type: actionTypes.FETCH_ARTIST_INFO_SUCCESS,
      payload: { artist: 'artist' }
    };
    expect(actions.artistInfoFetched({ artist: 'artist' })).toEqual(expected);
  });

  it ('should create an action representing artist info fail', () => {
    const expected = {
      type: actionTypes.FETCH_ARTIST_INFO_FAILURE,
      error: { error: 'error' }
    };
    expect(actions.artistInfoFetchFailed({ error: 'error' })).toEqual(expected);
  });

  it('should create an action to fetch artists list', () => {
    const expected = {
      type: actionTypes.FETCH_ARTISTS_LIST,
    };
    expect(actions.fetchArtistsList()).toEqual(expected);
  });

  it('should create an action representing artists list successful fetch', () => {
    const expected = {
      type: actionTypes.FETCH_ARTISTS_LIST_SUCCESS,
      payload: []
    };
    expect(actions.artistsListFetched([])).toEqual(expected);
  });

  it('should create an action representing artist list fetch fail', () => {
    const expected = {
      type: actionTypes.FETCH_ARTISTS_LIST_FAILURE,
      error: { error: 'error' }
    };
    expect(actions.artistsFetchFailure({ error: 'error' })).toEqual(expected)
  });
});