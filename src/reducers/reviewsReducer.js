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
        reviews: state.reviews.concat(action.payload.data)
      };
    case actionTypes.POST_REVIEW_FAILURE:
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