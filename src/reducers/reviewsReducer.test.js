import * as types from '../actions/actionTypes';
import reducer from './reviewsReducer';

describe('ReviewsReducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toEqual({
      reviews: [],
      isFetching: false
    });
  });

  it('should handle POST_REVIEW_REQUEST', () => {
    expect(reducer(undefined, {
      type: types.POST_REVIEW_REQUEST,
      isFetching: true
    })).toEqual({
      isFetching: true,
      reviews: []
    });
  });

  it('should handle POST_REVIEW_SUCCESS', () => {
    expect(reducer({
      reviews: [{ review: 'review' }],
      isFetching: true
    }, {
      type: types.POST_REVIEW_SUCCESS,
      payload: { data: { review: 'review2' } },
      isFetching: false
    })).toEqual({
      isFetching: false,
      reviews: [ { review: 'review2' }, { review: 'review' } ]
    });
  });

  it('should handle POST_REVIEW_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.POST_REVIEW_FAILURE,
      isFetching: false,
      error: 'error'
    })).toEqual({
      isFetching: false,
      error: 'error',
      reviews: []
    });
  });

  it('should handle GET_REVIEWS_REQUEST', () => {
    expect(reducer(undefined, {
      type: types.GET_REVIEWS_REQUEST,
      isFetching: true
    })).toEqual({
      reviews: [],
      isFetching: true
    });
  });

  it('should handle GET_REVIEWS_SUCCESS', () => {
    expect(reducer(undefined, {
      type: types.GET_REVIEWS_SUCCESS,
      payload: { data: [{
            name: 'review1'
          }, {
            name: 'review2'
          }]},
      isFetching: false
    })).toEqual({
      reviews: [{
        name: 'review1'
      }, {
        name: 'review2'
      }],
      isFetching: false,
    });
  });

  it('should handle GET_REVIEWS_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.GET_REVIEWS_FAILURE,
      isFetching: false,
      error: 'error'
    })).toEqual({
      reviews: [],
      isFetching: false,
      error: 'error'
    });
  })
});