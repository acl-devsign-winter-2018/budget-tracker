import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { category } from './components/categories/reducers';
import { expensesByCategory } from './components/expenses/reducers';


const reducer = combineReducers({
  category, 
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