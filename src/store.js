import { createStore } from 'redux';
import { category } from './components/categories/reducers';

const store = createStore(
  category,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;