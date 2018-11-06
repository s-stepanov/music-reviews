import * as actionTypes from './../actions/actionTypes';

const initialState = {
  artistsList: [],
  artistInfo: {},
  isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ARTISTS_LIST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_ARTISTS_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        artistsList: action.payload.data ? action.payload.data : [],
      };
    case actionTypes.FETCH_ARTISTS_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case actionTypes.FETCH_ARTIST_INFO:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_ARTIST_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        artistInfo: action.payload.data
      };
    case actionTypes.FETCH_ARTIST_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return {
        ...state
      }
  }
}