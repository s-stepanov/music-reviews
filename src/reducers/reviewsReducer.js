import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  reviews: [],
  isFetching: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.POST_REVIEW_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case actionTypes.POST_REVIEW_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        reviews: [ action.payload.data, ...state.reviews ]
      };
    case actionTypes.POST_REVIEW_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        error: action.error
      };
    case actionTypes.GET_REVIEWS_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case actionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        reviews: action.payload.data
      };
    case actionTypes.GET_REVIEWS_FAILURE:
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