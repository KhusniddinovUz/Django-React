import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

//Alert options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
