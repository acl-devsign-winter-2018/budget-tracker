import { EXPENSES_CREATE, EXPENSES_DESTROY } from './reducers';
import shortid from 'shortid';

export function addExpense(categoryId, expense) {
  const payload = {
    id: shortid(),
    expense: expense.expense,
    amount: expense.amount,
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

