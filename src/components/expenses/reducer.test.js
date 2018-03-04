import { expensesByCategory } from './reducer';
import { CATEGORY_ADD, CATEGORY_REMOVE } from '../budget/reducer';
import { EXPENSE_ADD, EXPENSE_REMOVE } from './reducer';

it('has default state of {}', () => {
  const state = expensesByCategory(undefined, {});
  expect(state).toEqual({});
});

const addCategory = () => expensesByCategory({}, {
  type: EXPENSE_ADD, 
  payload: { id: 123 } 
});

