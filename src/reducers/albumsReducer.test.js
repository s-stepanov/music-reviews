import * as types from '../actions/actionTypes';
import reducer from './albumsReducer';

describe('AlbumsReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      album: {},
      isFetching: false,
      error: ''
    });
  });

  it('should handle FETCH_ALBUM_INFO action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ALBUM_INFO,
      isFetching: true
    })).toEqual({
      album: {},
      isFetching: true,
      error: ''
    });
  });

  it('should handle FETCH_ALBUM_INFO_SUCCESS action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ALBUM_INFO_SUCCESS,
      isFetching: false,
      payload: {
        data: { name: 'album' }
      }
    })).toEqual({
      album: { name: 'album' },
      isFetching: false,
      error: ''
    });
  });

  it('should handle FETCH_ALBUM_INFO_FAILURE action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ALBUM_INFO_FAILURE,
      isFetching: false,
      error: 'error'
    })).toEqual({
      album: {},
      isFetching: false,
      error: 'error'
    });
  });
});