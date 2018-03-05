import { EXPENSES_CREATE, EXPENSES_DESTROY, EXPENSE_UPDATE } from './reducers';
import expenseApi from '../../services/expenseApi';


export function addExpense(categoryId, expense){
  return dispatch => {
    return expenseApi.addExpense(categoryId, expense)
      .then(payload => {
        dispatch({
          type: EXPENSES_CREATE,
          payload: payload
        });
      });
  };
}

export function removeExpense(id, categoryId){
  return dispatch => {
    return expenseApi.removeExpense(id, categoryId)
      .then(() => {
        dispatch({
          type: EXPENSES_DESTROY,
          payload: { id, categoryId }
        });
      });
  };
}

export function updateExpense(categoryId, expense) {
  return dispatch => {
    return expenseApi.updateExpense(categoryId, expense)
      .then(updatedExpense => {
        dispatch({
          type: EXPENSE_UPDATE,
          payload: updatedExpense
        });
      });
  };
}

