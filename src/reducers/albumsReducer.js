import * as actionTypes from '../actions/actionTypes';

const initialState = {
  album: {},
  isFetching: false,
  error: ''
};

export default function (state=initialState, action) {
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
    default:
      return {
        ...state
      };
  }
}