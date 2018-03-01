import { CATEGORY_ADD, CATEGORY_REMOVE } from './categoryReducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

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
        [categoryId]: categoryExpenses.filter(expense => expense.id !== id)
      };
    }
    case EXPENSE_UPDATE: {
      console.log('*****************', state);
      console.log(state[categoryId]);
      const { id, categoryId, updates } = payload;
      const categoryExpenses = state[categoryId];
      const index = categoryExpenses.findIndex(expense => expense.id === id);
      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses.slice(0, index),
          { ...categoryExpenses[index], ...updates },
          ...categoryExpenses.slice(index + 1)
        ]
      };
    }
    default:
      return state;
  }
}