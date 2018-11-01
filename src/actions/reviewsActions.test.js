import * as actionTypes from './actionTypes';
import * as actions from './reviewsActions';

describe('Reviews actions', () => {
  it('should create an action to fetch reviews', () => {
    const expected = {
      type: actionTypes.GET_REVIEWS_REQUEST,
      isFetching: true
    };

    expect(actions.getReviewsRequest(1)).toEqual(expected);
  });

  it('should create an action representing successful fetch', () => {
    const expected = {
      type: actionTypes.GET_REVIEWS_SUCCESS,
      isFetching: false,
      payload: [{ review: 'review' }]
    };

    expect(actions.getReviewsSuccess([{ review: 'review' }])).toEqual(expected);
  });

  it('should create an action representing fetching failure', () => {
    const expected = {
      type: actionTypes.GET_REVIEWS_FAILURE,
      isFetching: false,
      error: { error: 'error' }
    };

    expect(actions.getReviewsFailure({ error: 'error' })).toEqual(expected);
  });

  it('should create an action to post review', () => {
    const expected = {
      type: actionTypes.POST_REVIEW_REQUEST,
      isFetching: true
    };

    expect(actions.postReviewRequest()).toEqual(expected);
  });

  it('should create an action representing successful post', () => {
    const expected = {
      type: actionTypes.POST_REVIEW_SUCCESS,
      isFetching: false,
      payload: {}
    };

    expect(actions.postReviewSuccess({})).toEqual(expected);
  });

  it('should create an action representing post failure', () => {
    const expected = {
      type: actionTypes.POST_REVIEW_FAILURE,
      isFetching: false,
      error: {}
    };

    expect(actions.postReviewFailure({})).toEqual(expected);
  });
});