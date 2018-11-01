import * as actionTypes from './actionTypes';
import * as actions from './albumsActions';

describe('Albums actions', () => {
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