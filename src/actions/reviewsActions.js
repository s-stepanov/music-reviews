import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getReviews = mbid => {
  return dispatch => {
    dispatch(getReiewsRequest());
    axios.get(`/api/reviews/${mbid}`)
      .then(({data}) => dispatch(getReviewsSuccess(data)))
      .catch((err) => dispatch(getReviewsFailure(err)));
  };
};

export const postReview = (mbid, score, content, authorId) => {
  return dispatch => {
    dispatch(postReviewRequest());
    axios.post(`/api/reviews`, { mbid, score, content, authorId })
      .then(({data}) => dispatch(postReviewSuccess(data)))
      .catch((err) => dispatch(postReviewFailure(err)));
  };
};

export const getReiewsRequest = () => {
  return {
    type: actionTypes.GET_REVIEWS_REQUEST,
    isFetching: true
  };
};

export const getReviewsSuccess = (data) => {
  return {
    type: actionTypes.GET_REVIEWS_SUCCESS,
    isFetching: false,
    payload: data
  }
};

export const getReviewsFailure = (error) => {
  return {
    type: actionTypes.GET_REVIEWS_FAILURE,
    isFetching: false,
    error
  }
};

export const postReviewRequest = () => {
  return {
    type: actionTypes.POST_REVIEW_REQUEST,
    isFetching: true
  }
};

export const postReviewSuccess = (data) => {
  return {
    type: actionTypes.POST_REVIEW_SUCCESS,
    isFetching: false,
    payload: data
  }
};

export const postReviewFailure = (error) => {
  return {
    type: actionTypes.POST_REVIEW_FAILURE,
    isFetching: false,
    error
  }
};