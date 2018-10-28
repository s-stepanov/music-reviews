import artists from './artistsReducer';
import albums from './albumsReducer';
import auth from './authReducer';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  artists,
  albums,
  auth,
  form,
  router: routerReducer
});
