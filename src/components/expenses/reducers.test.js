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

// it('adds an entry when expenses are added', () => {

// })