import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAlbumInfo = mbid => {
  return dispatch => {
    dispatch(fetchAlbum());
    return axios.get(`/api/album/${mbid}`)
      .then(({ data }) => dispatch(albumFetched(data)))
      .catch(({ err }) => dispatch(albumFetchFailure(err)));
  };
};

export const getTopAlbums = () => {
  return dispatch => {
    dispatch(fetchTopAlbums());
    return axios.get('/api/albums/top')
      .then(({ data }) => dispatch(fetchTopAlbumsSuccess(data)))
      .catch(({ err }) => dispatch(fetchTopAlbumsFailure(err)));
  };
};

export const fetchAlbum = () => {
  return {
    type: actionTypes.FETCH_ALBUM_INFO,
    isFetching: true
  };
};

export const albumFetched = album => {
  return {
    type: actionTypes.FETCH_ALBUM_INFO_SUCCESS,
    payload: album,
    isFetching: false
  };
};

export const albumFetchFailure = error => {
  return {
    type: actionTypes.FETCH_ALBUM_INFO_FAILURE,
    isFetching: false,
    error: error
  };
};

export const fetchTopAlbums = () => {
  return {
    type: actionTypes.FETCH_TOP_ALBUMS,
    isFetching: true
  };
};

export const fetchTopAlbumsSuccess = albums => {
  return {
    type: actionTypes.FETCH_TOP_ALBUMS_SUCCESS,
    isFetching: false,
    payload: albums
  };
};

export const fetchTopAlbumsFailure = error => {
  return {
    type: actionTypes.FETCH_TOP_ALBUMS_FAILURE,
    isFetching: false,
    error
  };
};