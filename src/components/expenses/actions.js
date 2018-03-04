import { EXPENSES_CREATE, EXPENSES_DESTROY } from './reducers';
import shortid from 'shortid';
import expenseApi from '../../services/expenseApi';

//non async add action
// export function addExpense(categoryId, expense) {
//   const payload = {
//     id: shortid(),
//     expense: expense.expense,
//     amount: expense.amount,
//     categoryId: categoryId
//   };
  
//   return {
//     type: EXPENSES_CREATE,
//     payload: payload
//   };
// }

// async add action
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

// used for non async use
// export function removeExpense(id, categoryId){
//   return {
//     type: EXPENSES_DESTROY,
//     payload: { id, categoryId }
//   };
// }

//async action
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

