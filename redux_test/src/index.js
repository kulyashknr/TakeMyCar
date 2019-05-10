import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import thunk from 'redux-thunk';
import { fetchAllPosts } from './actions/index';

// const store_store = store();
/* ReactDOM.render(
    <Provider store={store_store}>
      <App />
    </Provider>,
    document.getElementById('root')
  ); */
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
