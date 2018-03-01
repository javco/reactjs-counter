import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Counter from './reducers/Counter'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Counter)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>), document.getElementById('root'));
registerServiceWorker();
