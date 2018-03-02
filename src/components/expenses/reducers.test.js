import { expensesByCategory } from './reducers';
import { CATEGORY_CREATE, CATEGORY_DESTROY } from '../categories/reducers';
import { EXPENSES_CREATE, EXPENSES_DESTROY } from './reducers';

it('had default state of {}', () => {
  const state = expensesByCategory(undefined, {});
  expect(state).toEqual({});
});

const addCategory = () => expensesByCategory({}, {
  type: CATEGORY_CREATE,
  payload: { id: 123 }
});

it('adds an entry when category are added', () => {
  const state = addCategory();
  expect(state).toEqual({ 123: [] });
});

it('removes expenses when category is removed', () => {
  const state = expensesByCategory({ 123: [] }, {
    type: CATEGORY_DESTROY,
    payload: 123,
  });
  expect(state).toEqual({});
});

it('adds and removes a expenses from a category', () => {
  const prevState = addCategory();
  const expenses = {
    id: 456,
    categoryId: 123,
    text: 'a big expenses'
  };

  const addedState = expensesByCategory(prevState, {
    type: EXPENSES_CREATE,
    payload: expenses
  });

  expect(addedState).toEqual({
    123:[expenses]
  });

  const removedState = expensesByCategory(addedState, {
    type: EXPENSES_DESTROY,
    payload: {
      id: 456,
      categoryId: 123
    }
  });

  expect(removedState).toEqual({
    123: []
  });
});