import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducer';
import shortid from 'shortid';

export function addExpense(categoryId, expense) {
  expense.id = shortid();
  expense.categoryId = categoryId;
  expense.timestamp = new Date();

  return {
    type: EXPENSE_ADD,
    payload: expense
  };
}

export function updateExpense(expense) {
  return {
    type: EXPENSE_UPDATE,
    payload: expense
  };
}

export function removeExpense(id, categoryId) {
  return {
    type: EXPENSE_REMOVE,
    payload: { id, categoryId }
  };
}