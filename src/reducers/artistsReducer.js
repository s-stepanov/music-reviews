import * as actionTypes from './../actions/actionTypes';

const initialState = {
  status: '',
  data: []
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
        data: action.payload.data ? action.payload.data : [],
        status: action.payload.status
      };
    case actionTypes.FETCH_ARTISTS_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return {
        ...state
      }
  }
}