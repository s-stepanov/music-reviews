import * as actionTypes from './actionTypes';
import axios from 'axios';

export const logout = () => {
  return dispatch => {
    dispatch(logoutRequest());
    axios.get('/api/auth/logout')
      .then(() => window.location.href = '/login');
  };
};

export const logoutRequest = () => {
  return {
    type: actionTypes.LOGOUT
  }
};

export const getCurrentUser = () => {
  return dispatch => {
    dispatch(fetchCurrentUser());
    axios.get('/api/users/current')
      .then(({data}) => {
        dispatch(currentUserFetched(data));
      })
      .catch(() => {
        if (window.location.href !== 'http://localhost:3000/login') {
          window.location.href = '/login';
        }
      });
  };
};

export const fetchCurrentUser = () => {
  return {
    type: actionTypes.FETCH_CURRENT_USER,
  };
};


export const currentUserFetched = data => {
  return {
    type: actionTypes.CURRENT_USER_FETCHED,
    payload: data
  };
};