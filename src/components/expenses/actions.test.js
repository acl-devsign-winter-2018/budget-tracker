import { addExpense, removeExpense } from './actions';
import { EXPENSE_ADD, EXPENSE_DELETE } from './reducers';

it.skip('adds an expense', () => {
  const catId = 111;
  const expenseName = 'Movies';
  const amount = 40;
  const { type, payload } = addExpense(catId, { expenseName, amount });
  expect(type).toBe(EXPENSE_ADD);
  expect(payload.id).toBeTruthy();
  expect(payload.catId).toBe(catId);
  expect(payload.expenseName).toBe(expenseName);
  expect(payload.amount).toBe(amount);
});

it.skip('removes an expense', () => {
  const id = 111;
  const catId = 222;
  const action = removeExpense(id, catId);
  expect(action).toEqual({
    type: EXPENSE_DELETE,
    payload: { catId, id }
  });
});