import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import initialize from './actions/initialize';
import App from './components/App/App';
import './index.scss';

const store = configureStore();

store.dispatch(initialize());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
