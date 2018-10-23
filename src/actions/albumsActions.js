import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAlbumInfo = mbid => {
  return dispatch => {
    dispatch(fetchAlbum());
    axios.get(`http://localhost:3001/api/album/${mbid}`)
      .then(({data}) => dispatch(albumFetched(data)))
      .catch(({err}) => dispatch(albumFetchFailure(err)))
  }
};

export const fetchAlbum = () => {
  return {
    type: actionTypes.FETCH_ALBUM_INFO,
    isFetching: true
  }
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
  }
};