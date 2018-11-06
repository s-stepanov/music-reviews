import * as types from '../actions/actionTypes';
import * as actions from './authActions';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockStore = configureStore([thunk]);
const httpMock = new MockAdapter(axios);

httpMock.onGet(/\/api\/users\/current/).reply(200, {
  data: { currentUser: 'user' }
});

describe('Auth Actions', () => {
  it('should create action for fetching the current user', () => {
    expect(actions.fetchCurrentUser()).toEqual({
      type: types.FETCH_CURRENT_USER
    })
  });

  it('should create an action representing successful fetch of current user', () => {
    expect(actions.currentUserFetched({ user: 'user' })).toEqual({
      type: types.CURRENT_USER_FETCHED,
      payload: { user: 'user' }
    });
  });

  it('should perform request for current user fetching', () => {
    const store = mockStore({});

    return store.dispatch(actions.getCurrentUser())
      .then(() => {
        const mockStoreActions = store.getActions();
        expect(mockStoreActions[0]).toEqual(actions.fetchCurrentUser());
        expect(mockStoreActions[1]).toEqual(actions.currentUserFetched({
          data: { currentUser: 'user' }
        }));
      });
  });
});