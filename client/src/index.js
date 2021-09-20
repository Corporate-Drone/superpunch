import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux' //connects global 
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';

import './_index.scss';
import App from './App';
import rootReducer from './reducers'

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <App />
    </HashRouter>
    </Provider>,
  document.getElementById('root')
);
