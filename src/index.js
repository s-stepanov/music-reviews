import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers';
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunkMiddleware))
);

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
