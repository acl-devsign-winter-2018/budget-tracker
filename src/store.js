import { createStore } from 'redux';
import { categories } from './components/reducers/categoryReducers';
// import { expensesByCategory } from './components/reducers/expensesReducers';

// const reducer = combineReducers({
//   categories,
//   expensesByCategory
// });

const store = createStore(
  categories,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;