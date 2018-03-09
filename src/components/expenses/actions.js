import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducer';
// import shortid from 'shortid';
import budgetApi from '../../services/budgetApi';

export function addExpense(categoryId, expense) {
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

export function updateExpense(categoryId, expense) {
  return dispatch => {
    return budgetApi.updateExpense(categoryId, expense)
      .then((expenseUpdated) => {
        dispatch({
          type: EXPENSE_UPDATE,
          payload: expenseUpdated
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