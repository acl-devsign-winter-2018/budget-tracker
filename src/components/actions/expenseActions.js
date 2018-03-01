import { EXPENSE_ADD, EXPENSE_REMOVE } from  '../reducers/expensesReducers';
import shortid from 'shortid';

export function addExpense(categoryId, expense) {
  expense.id = shortid();
  expense.categoryId = categoryId;

  return {
    type: EXPENSE_ADD,
    payload: expense
  };
}

export function removeExpense(id, categoryId) {
  return {
    type: EXPENSE_REMOVE,
    payload: { id, categoryId }
  };
}