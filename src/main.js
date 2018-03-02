import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import CategoryForm from './components/category/CategoryForm.js';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);