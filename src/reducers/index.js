import artists from './artistsReducer';
import albums from './albumsReducer';
import auth from './authReducer';
import reviews from './reviewsReducer';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  artists,
  albums,
  auth,
  reviews,
  form,
  router: routerReducer
});
