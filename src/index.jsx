import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import initialize from './actions/initialize';
import App from './components/App/App';
import io from 'socket.io-client';
import './index.scss';

const store = configureStore();
const socket = io('localhost:5000');

socket.on('state', () => {
});

store.dispatch(initialize());

render(
  <Provider store={store}>
    <App socket={socket} />
  </Provider>,
  document.getElementById('app')
);
