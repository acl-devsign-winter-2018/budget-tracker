import { expensesByCat } from './reducers';
import { CATEGORY_ADD, CATEGORY_DELETE } from '../categories/reducers';
import { EXPENSE_ADD, EXPENSE_DELETE } from './reducers';

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
    type: CATEGORY_DELETE,
    payload: 111
  });
  expect(state).toEqual({});
});

it('adds and removes an expense from a category', () => {
  const previousState = addCat();
  const expense = {
    id: 222,
    categoryId: 111,
    name: 'Movies',
    price: 40
  };

  const addedState = expensesByCat(previousState, {
    type: EXPENSE_ADD,
    payload: expense
  });

  expect(addedState).toEqual({
    111: [expense]
  });

  const removedState = expensesByCat(addedState, {
    type: EXPENSE_DELETE,
    payload: {
      id: 222,
      categoryId: 111
    }
  });
  expect(removedState).toEqual({
    111: []
  });

});
