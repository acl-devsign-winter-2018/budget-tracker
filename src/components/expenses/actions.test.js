import { addExpense, removeExpense } from './actions';
import { EXPENSE_ADD, EXPENSE_DELETE } from './reducers';

it.skip('adds an expense', () => {
  const categoryId = 111;
  const name = 'Movies';
  const price = 40;
  const { type, payload } = addExpense(categoryId, { name, price });
  expect(type).toBe(EXPENSE_ADD);
  expect(payload.id).toBeTruthy();
  expect(payload.categoryId).toBe(categoryId);
  expect(payload.name).toBe(name);
  expect(payload.price).toBe(price);
});

it.skip('removes an expense', () => {
  const id = 111;
  const categoryId = 222;
  const action = removeExpense(id, categoryId);
  expect(action).toEqual({
    type: EXPENSE_DELETE,
    payload: { categoryId, id }
  });
});