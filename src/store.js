import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { categories } from './components/budget/reducer';
import { expensesByCategory } from './components/expenses/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  categories,
  expensesByCategory
});

const async = store => next => action => {
  if(typeof action === 'function') {
    action(store.dispatch, store.getState);
  }
  else {
    return next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  ));

export default store;