import { addExpense, removeExpense, updateExpense } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from  '../reducers/expensesReducers';

it.skip('adds an expense', () => {
  const categoryId = 111;
  const price = 200;
  const { type, payload } = addExpense(categoryId, { price });
  expect(type).toBe(EXPENSE_ADD);
  expect(payload.id).toBeTruthy();
  expect(payload.categoryId).toBe(categoryId);
  expect(payload.price).toBe(price);
});

it.skip('removes an expense', () => {
  const id = 123;
  const categoryId = 456;
  const action = removeExpense(id, categoryId);
  expect(action).toEqual({
    type: EXPENSE_REMOVE,
    payload: { categoryId, id }
  });
});

it.skip('creates an update action', () => {
  const action = updateExpense({ id: 123, categoryId: 111, price: 200 });
  expect(action).toEqual({
    type: EXPENSE_UPDATE,
    payload: {
      id: 123,
      categoryId: 111,
      price: 200
    }
  });
});