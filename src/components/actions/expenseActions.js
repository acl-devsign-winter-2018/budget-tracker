import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from  '../reducers/expensesReducers';
import shortid from 'shortid';
import budgetApi from '../../services/budgetApi';

export function addExpense(categoryId, expense) {
  expense.id = shortid();
  expense.categoryId = categoryId;
  return dispatch => {
    return budgetApi.addExpense(categoryId, expense)
      .then(expense => {
        dispatch({
          type: EXPENSE_ADD,
          payload: {
            categoryId,
            expense
          }
        });
      });
  };
}

export function removeExpense(id, categoryId) {
  return dispatch => {
    return budgetApi.removeExpense(categoryId, id)
      .then(() => {
        dispatch({
          type: EXPENSE_REMOVE,
          payload: { id, categoryId }
        });
      });
  };
}

export function updateExpense(categoryId, expense) {
  return dispatch => {
    return budgetApi.updateExpense(categoryId, expense)
      .then(updatedExpense => {
        dispatch({
          type: EXPENSE_UPDATE,
          payload: updatedExpense
        });
      });
  };
}