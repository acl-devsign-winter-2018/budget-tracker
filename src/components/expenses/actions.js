import { EXPENSE_ADD, EXPENSE_DELETE } from './reducers';
import shortid from 'shortid';

export function addExpense(catId, expense) {
  expense.id = shortid();
  expense.catId = catId;

  return {
    type: EXPENSE_ADD,
    payload: expense
  };
}

export function removeExpense(id, catId) {
  return {
    type: EXPENSE_DELETE,
    payload: { id, catId }
  };
}