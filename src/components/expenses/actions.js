import { EXPENSE_ADD, EXPENSE_DELETE } from './reducers';
import categoriesApi from '../../services/categoriesApi';

export function addExpense(catId, expense) {
  return (dispatch) => {
    return categoriesApi.addExpense(catId, expense)
      .then(savedExpense => {
        dispatch({
          type: EXPENSE_ADD,
          payload: {
            catId,
            savedExpense
          }
        });
      });
  };
}

export function removeExpense(catId, id) {
  return dispatch => {
    return categoriesApi.removeExpense(catId, id)
      .then(() => {
        dispatch({
          type: EXPENSE_DELETE,
          payload: { catId, id }
        });
      });
  };
}