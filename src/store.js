import { createStore, combineReducers } from 'redux';
import { category } from './components/categories/reducers';
import { expensesByCategory } from './components/expenses/reducers';

const reducer = combineReducers({
  category, 
  expensesByCategory
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;