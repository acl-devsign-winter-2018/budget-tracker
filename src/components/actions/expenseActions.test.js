import { addExpense, removeExpense } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_REMOVE } from  '../reducers/expensesReducers';

it('adds an expense', () => {
  const categoryId = 111;
  const price = 200;
  const { type, payload } = addExpense(categoryId, { price });
  expect(type).toBe(EXPENSE_ADD);
  expect(payload.id).toBeTruthy();
  expect(payload.categoryId).toBe(categoryId);
  expect(payload.price).toBe(price);
});

it('removes an expense', () => {
  const id = 123;
  const categoryId = 456;
  const action = removeExpense(id, categoryId);
  expect(action).toEqual({
    type: EXPENSE_REMOVE,
    payload: { categoryId, id }
  });
});