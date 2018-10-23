import artists from './artistsReducer';
import albums from './albumsReducer';
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
  artists,
  albums,
  form
});
