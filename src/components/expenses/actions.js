import { EXPENSES_CREATE, EXPENSES_DESTROY } from './reducers';
import shortid from 'shortid';

export function addExpense(categoryId, expense, amount) {
  const payload = {
    id: shortid(),
    expense: expense,
    amount: amount,
    categoryId: categoryId
  };
  
  return {
    type: EXPENSES_CREATE,
    payload: payload
  };
}

export function removeExpense(id, categoryId){
  return {
    type: EXPENSES_DESTROY,
    payload: { id, categoryId }
  };
}

