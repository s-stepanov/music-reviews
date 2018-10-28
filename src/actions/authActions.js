import * as actionTypes from './actionTypes';
import axios from 'axios';

export const login = () => {
  return dispatch => {
    dispatch(loginRequest());
    axios.get('/api/auth/google')
      .then(({data}) => loginSuccess(data))
      .catch((err) => loginFailure(err))
  };
};

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

export const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data
  };
};

export const loginFailure = (error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    error
  };
};

export const loginRequest = () => {
  return {
    type: actionTypes.LOGIN
  };
};