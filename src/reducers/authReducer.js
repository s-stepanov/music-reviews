import * as actionTypes from '../actions/actionTypes';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CURRENT_USER_FETCHED:
      return {
        ...state,
        currentUser: action.payload.data,
        isAuthenticated: !!action.payload.data,
        isFetching: false
      };
    case actionTypes.FETCH_CURRENT_USER:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
        isAuthenticated:false
      };
    default:
      return state;
  }
}