import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { categories } from './components/reducers/categoryReducers';
import { expensesByCategory } from './components/reducers/expensesReducers';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  categories,
  expensesByCategory
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  )
);

export default store;

