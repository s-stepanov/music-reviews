import * as types from '../actions/actionTypes';
import reducer from './artistsReducer';

describe('ArtistsReducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual({
      artistsList: [],
      artistInfo: {},
      isFetching: false
    });
  });

  it('should handle FETCH_ARTIST_LIST action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ARTISTS_LIST,
      isFetching: true
    })).toEqual({
      isFetching: true,
      artistsList: [],
      artistInfo: {}
    });
  });

  it('should handle FETCH_ARTISTS_LIST_SUCCESS action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ARTISTS_LIST_SUCCESS,
      payload: { data: [ { name: 'artist' } ] }
    })).toEqual({
      artistInfo: {},
      artistsList: [{ name: 'artist' }],
      isFetching: false
    });
  });

  it('should handle FETCH_ARTISTS_LIST_FAILURE action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ARTISTS_LIST_FAILURE,
      error: 'error'
    })).toEqual({
      artistInfo: {},
      artistsList: [],
      isFetching: false,
      error: 'error'
    });
  });

  it('should handle FETCH_ARTIST_INFO action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ARTIST_INFO
    })).toEqual({
      artistsList: [],
      artistInfo: {},
      isFetching: true,
    });
  });

  it('should handle FETCH_ARTIST_INFO_SUCCESS action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ARTIST_INFO_SUCCESS,
      payload: { data: { name: 'artist' } }
    })).toEqual({
      artistInfo: { name: 'artist' },
      artistsList: [],
      isFetching: false
    });
  });

  it('should handle FETCH_ARTIST_INFO_FAILURE action', () => {
    expect(reducer(undefined, {
      type: types.FETCH_ARTIST_INFO_FAILURE,
      error: 'error'
    })).toEqual({
      artistInfo: {},
      artistsList: [],
      isFetching: false,
      error: 'error'
    });
  });
});