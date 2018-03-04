import { createStore, combineReducers } from 'redux';
import { categories } from './components/budget/reducer';
import { expensesByCategory } from './components/expenses/reducer';

const reducer = combineReducers({
  categories,
  expensesByCategory
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;