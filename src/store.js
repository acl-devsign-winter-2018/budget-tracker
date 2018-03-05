import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { categories } from './components/categories/reducers';
import { expensesByCat } from './components/expenses/reducers';

const reducer = combineReducers({
  categories,
  expensesByCat
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
  )
);

export default store;