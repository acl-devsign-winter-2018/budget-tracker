import { EXPENSE_ADD, EXPENSE_DELETE } from './reducers';
import categoriesApi from '../../services/categoriesApi';

export function addExpense(categoryId, expense) {
  return (dispatch) => {
    return categoriesApi.addExpense(categoryId, expense)
      .then(savedExpense => {
        dispatch({
          type: EXPENSE_ADD,
          payload: {
            categoryId,
            savedExpense
          }
        });
      });
  };
}

export function removeExpense(categoryId, id) {
  return dispatch => {
    return categoriesApi.removeExpense(categoryId, id)
      .then(() => {
        dispatch({
          type: EXPENSE_DELETE,
          payload: { categoryId, id }
        });
      });
  };
}