import { expensesByCat } from './reducers';
import { CATEGORY_ADD, CATEGORY_DESTROY } from '../categories/reducers';
import { EXPENSE_ADD, EXPENSE_DESTROY } from './reducers';

it('has default empty object as state', () => {
  const state = expensesByCat(undefined, {});
  expect(state).toEqual({});
});

const addCat = () => expensesByCat({}, {
  type: CATEGORY_ADD,
  payload: {
    id: 111,
    timestamp: new Date(),
    name: 'Entertainment',
    budget: 3000
  }
});

it('adds entry point for expenses when category is added', () => {
  const state = addCat();
  expect(state).toEqual({ 111: [] });
});

it('removes comments and entry for comments when category is removed', () => {
  const state = expensesByCat({ 111: [] }, {
    type: CATEGORY_DESTROY,
    payload: 111
  });
  expect(state).toEqual({});
});

it('adds and removes an expense from a category', () => {
  const previousState = addCat();
  const expense = {
    id: 222,
    catId: 111,
    expenseName: 'Movies',
    expenseAmt: 40
  };

  const addedState = expensesByCat(previousState, {
    type: EXPENSE_ADD,
    payload: expense
  });

  expect(addedState).toEqual({
    111: [expense]
  });

  const removedState = expensesByCat(addedState, {
    type: EXPENSE_DESTROY,
    payload: {
      id: 222,
      catId: 111
    }
  });
  expect(removedState).toEqual({
    111: []
  });

});
