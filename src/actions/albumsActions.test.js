import * as actionTypes from './actionTypes';
import * as actions from './albumsActions';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const MockAdapter = require('axios-mock-adapter');
const httpMock = new MockAdapter(axios);

httpMock.onGet(/\/api\/album\/\d+/).reply(200, {
  data: {
    album: 'album'
  }
});

describe('Albums actions', () => {
  it('should perform a request to fetch an album', () => {
    const store = mockStore({});

    return store.dispatch(actions.getAlbumInfo('1'))
      .then(() => {
        const storeActions = store.getActions();
        expect(storeActions[0]).toEqual(actions.fetchAlbum());
        expect(storeActions[1]).toEqual(actions.albumFetched({data: {
            album: 'album'
          }}));
      });
  });

  it('should create an action to fetch an album', () => {
    const expected = {
      type: actionTypes.FETCH_ALBUM_INFO,
      isFetching: true
    };

    expect(actions.fetchAlbum()).toEqual(expected);
  });

  it('should create an action representing successful fetch', () => {
    const expected = {
      type: actionTypes.FETCH_ALBUM_INFO_SUCCESS,
      isFetching: false,
      payload: { name: 'name' }
    };

    expect(actions.albumFetched({ name: 'name' })).toEqual(expected);
  });

  it('should create an action representing fetching failure', () => {
    const expected = {
      type: actionTypes.FETCH_ALBUM_INFO_FAILURE,
      isFetching: false,
      error: { error: 'error' }
    };

    expect(actions.albumFetchFailure({ error: 'error' })).toEqual(expected);
  });
});