import { expensesByCategory } from './expensesReducers';
import { CATEGORY_ADD, CATEGORY_REMOVE } from './categoryReducers';
import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './expensesReducers';

const expense = {
  id: 123,
  categoryId: 111,
  price: 111,
  name: 'stuff'
};

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

const expenses = {
  111: [
    {
      id: 123,
      name: 'stuff',
      price: 100
    }
  ]
};

it('expense update', () => {
  const update = {
    id: 123,
    categoryId: 111,
    updates: {
      price: 300
    }
  };

  const state = expensesByCategory(expenses, { type: EXPENSE_UPDATE, payload: update });

  expect(state).toEqual({
    111: [
      {
        id: 123,
        name: 'stuff',
        price: 300,
      }
    ]
  });
});