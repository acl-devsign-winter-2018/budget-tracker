import { CATEGORY_CREATE, CATEGORY_DESTROY, CATEGORY_LOAD } from '../categories/reducers';

export const EXPENSES_CREATE = 'EXPENSES_CREATE';
export const EXPENSES_DESTROY = 'EXPENSES_DESTROY';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';

export function expensesByCategory(state = {}, { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});

    case CATEGORY_CREATE: 
      return {
        ...state,
        [payload.id]: []
      };

    case CATEGORY_DESTROY: {
      const nextState = { ...state };
      delete nextState[payload];
      return nextState;
    }

    case EXPENSES_CREATE: {
      const { categoryId } = payload;
      const categoryExpenses = state[categoryId];

      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses,
          payload.payload
        ]
      };
    }

    case EXPENSES_DESTROY: {
      const { id, categoryId } = payload;
      const categoryExpenses = state[categoryId];

      return {
        ...state,
        [categoryId]: categoryExpenses.filter(e => e.id !== id)
      };
    }

    case EXPENSE_UPDATE: {
      const { id, categoryId } = payload;
      const categoryExpenses = state[categoryId];
      const index = categoryExpenses.findIndex(expense => expense.id === id);
      return {
        ...state,
        [categoryId]: [
          ...categoryExpenses.slice(0, index),
          { ...categoryExpenses[index], ...payload },
          ...categoryExpenses.slice(index + 1)
        ]
      };
    }

    default:
      return state;
  }
}