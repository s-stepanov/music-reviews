import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchArtists = (searchTerm) => {
  return dispatch => {
    dispatch(fetchArtistsList());
    axios.get(`http://localhost:3001/api/artist/?artist=${searchTerm}`)
      .then(({data}) => dispatch(artistsListFetched(data)))
      .catch(err => dispatch(artistsFetchFailure(err)));
  }
};

export const getArtistInfo = (artist) => {
  return dispatch => {

  }
};

export const fetchArtistsList = () => {
  return {
    type: actionTypes.FETCH_ARTISTS_LIST
  }
};

export const artistsListFetched = (data) => {
  return {
    type: actionTypes.FETCH_ARTISTS_LIST_SUCCESS,
    payload: data
  }
};

export const artistsFetchFailure = (err) => {
  return {
    type: actionTypes.FETCH_ARTISTS_LIST_FAILURE,
    error: err
  }
};

export const fetchArtistInfo = () => {
  return {
    type: actionTypes.FETCH_ARTIST_INFO
  };
};

export const artistInfoFetched = (data) => {
  return {
    type: actionTypes.FETCH_ARTIST_INFO_SUCCESS,
    payload: data
  }
};

export const artistInfoFetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_ARTIST_INFO_FAILURE,
    error: error
  }
};
