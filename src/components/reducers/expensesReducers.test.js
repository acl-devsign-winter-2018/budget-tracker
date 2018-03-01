import { expensesByCategory } from './expensesReducers';
import { CATEGORY_ADD, CATEGORY_REMOVE } from './categoryReducers';
import { EXPENSE_ADD, EXPENSE_REMOVE } from './expensesReducers';

it('has default state of {}', () => {
  const state = expensesByCategory(undefined, {});
  expect(state).toEqual({});
});

const addCategory = () => expensesByCategory({}, {
  type: CATEGORY_ADD,
  payload: { id: 111 }
});

it('adds an entry when expense is added', () => {
  const state = addCategory();
  expect(state).toEqual({ 111: [] });
});

it('removes expenses when a category is removed', () => {
  const state = expensesByCategory({ 111: [] }, {
    type: CATEGORY_REMOVE,
    payload: 111
  });
  expect(state).toEqual({});
});

it('adds and removes an expense from a category', () => {
  const prevState = addCategory();
  const expense = {
    id: 123,
    categoryId: 111,
    price: 111,
    name: 'stuff'
  };
  
  const addedState = expensesByCategory(prevState, {
    type: EXPENSE_ADD,
    payload: expense
  });

  expect(addedState).toEqual({
    111: [expense]
  });

  const removedState = expensesByCategory(addedState, {
    type: EXPENSE_REMOVE,
    payload: {
      id: 123,
      categoryId: 111
    }
  });

  expect(removedState).toEqual({
    111: []
  });
  
});