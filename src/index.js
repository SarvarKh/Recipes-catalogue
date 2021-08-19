import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './style/index.css';
import './style/small_screens.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
