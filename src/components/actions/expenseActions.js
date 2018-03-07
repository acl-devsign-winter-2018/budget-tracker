import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from  '../reducers/expensesReducers';
import budgetApi from '../../services/budgetApi';

export function addExpense(categoryId, expense) {

  return dispatch => {
    return budgetApi.addExpense(categoryId, expense)
      .then(newExpense => {
        dispatch({
          type: EXPENSE_ADD,
          payload: {
            categoryId: categoryId,
            ...newExpense
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