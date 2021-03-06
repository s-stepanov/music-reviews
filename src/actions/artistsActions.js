import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchArtists = (searchTerm) => {
  return dispatch => {
    dispatch(fetchArtistsList());
    axios.get(`/api/artist/?artist=${searchTerm}`)
      .then(({data}) => dispatch(artistsListFetched(data)))
      .catch(err => dispatch(artistsFetchFailure(err)));
  };
};

export const getArtistInfo = (mbid) => {
  return dispatch => {
    dispatch(fetchArtistInfo());
    axios.get(`/api/artist/${mbid}`)
      .then(({ data }) => dispatch(artistInfoFetched(data)))
      .catch(err => dispatch(artistInfoFetchFailed(err)));
  };
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
  };
};

export const artistsFetchFailure = (error) => {
  return {
    type: actionTypes.FETCH_ARTISTS_LIST_FAILURE,
    error
  };
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
  };
};

export const artistInfoFetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_ARTIST_INFO_FAILURE,
    error
  };
};
