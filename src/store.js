import { createStore, combineReducers } from 'redux';
import { categories } from './components/categories/reducers';
import { expensesByCat } from './components/expenses/reducers';

const reducer = combineReducers({
  categories,
  expensesByCat
});

const store = createStore(
  reducer
);

export default store;