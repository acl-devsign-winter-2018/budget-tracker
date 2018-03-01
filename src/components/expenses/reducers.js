import { CATEGORY_CREATE, CATEGORY_DESTROY } from '../categories/reducers';

export const EXPENSES_CREATE = 'EXPENSES_CREATE';
export const EXPENSES_DESTROY = 'EXPENSES_DESTROY';

export function expensesByCategory(state = {}, { type, payload }) {
  switch(type) {
    case CATEGORY_CREATE: 
      return {
        ...state,
        [payload.id]: []
      };

    case EXPENSES_CREATE: {
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

    default:
      return state;
  }
}