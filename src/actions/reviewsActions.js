import * as actionTypes from './actionTypes';
import axios from 'axios';
import { getAlbumInfo } from "./albumsActions";

export const getReviews = mbid => {
  return dispatch => {
    dispatch(getReviewsRequest());
    axios.get(`/api/reviews/${mbid}`)
      .then(({ data }) => dispatch(getReviewsSuccess(data)))
      .catch((err) => dispatch(getReviewsFailure(err)));
  };
};

export const postReview = (review, album, artist) => {
  return async dispatch => {
    dispatch(postReviewRequest());
    await axios.post(`/api/reviews`, { review, album, artist })
      .then(({ data }) => dispatch(postReviewSuccess(data)))
      .catch((err) => dispatch(postReviewFailure(err)));
    dispatch(getAlbumInfo(album.mbid));
  };
};

export const getReviewsRequest = () => {
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
  };
};

export const getReviewsFailure = (error) => {
  return {
    type: actionTypes.GET_REVIEWS_FAILURE,
    isFetching: false,
    error
  };
};

export const postReviewRequest = () => {
  return {
    type: actionTypes.POST_REVIEW_REQUEST,
    isFetching: true
  };
};

export const postReviewSuccess = (data) => {
  return {
    type: actionTypes.POST_REVIEW_SUCCESS,
    isFetching: false,
    payload: data
  };
};

export const postReviewFailure = (error) => {
  return {
    type: actionTypes.POST_REVIEW_FAILURE,
    isFetching: false,
    error
  };
};