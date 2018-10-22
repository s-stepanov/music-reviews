import artists from './artistsReducer';
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
  artists,
  form
});
