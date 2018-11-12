import * as actionTypes from '../actions/actionTypes';

const initialState = {
  album: {},
  isFetching: false,
  error: '',
  topAlbums: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ALBUM_INFO:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case actionTypes.FETCH_ALBUM_INFO_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        album: action.payload.data
      };
    case actionTypes.FETCH_ALBUM_INFO_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    case actionTypes.FETCH_TOP_ALBUMS:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case actionTypes.FETCH_TOP_ALBUMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        topAlbums: action.payload.data
      };
    case actionTypes.FETCH_TOP_ALBUMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return {
        ...state
      };
  }
}