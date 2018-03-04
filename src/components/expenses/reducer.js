import { CATEGORY_ADD, CATEGORY_REMOVE } from '../budget/reducer';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export function expensesByCategory(state = {}, { type, payload }) {
  switch(type) {

    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };

    case CATEGORY_REMOVE: {
      const nextState = { ...state };
      delete nextState[payload];
      return nextState;
    }
    
    case EXPENSE_ADD: {
      const { categoryId } = payload;
      const categoryExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses,
          payload
        ]
      };
    }

    case EXPENSE_REMOVE: {
      const { id, categoryId } = payload;
      const categoryExpenses = state[categoryId];

      return {
        ...state,
        [categoryId]: categoryExpenses.filter(c => c.id !== id)
      };
    }
    default:
      return state;
  }
}