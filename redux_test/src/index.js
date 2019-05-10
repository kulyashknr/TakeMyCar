import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import App from './App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchAllCars } from './actions/index';

// const store_store = store();
/* ReactDOM.render(
    <Provider store={store_store}>
      <App />
    </Provider>,
    document.getElementById('root')
  ); */
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllCars());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
