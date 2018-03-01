import { CATEGORY_ADD, CATEGORY_DESTROY } from '../categories/reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_DESTROY = 'EXPENSE_DESTROY';

export function expensesByCat(state = {}, { type, payload }) {
  switch(type) {
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORY_DESTROY: {
      const nextState = { ...state };
      delete nextState[payload];
      return nextState;
    }
    case EXPENSE_ADD: {
      const { catId } = payload;
      const catExpenses = state[catId];

      return {
        ...state,
        [catId]: [
          ... catExpenses,
          payload
        ]
      };
    }

    case EXPENSE_DESTROY: {
      const { id, catId } = payload;
      const catExpenses = state[catId];

      return {
        ...state,
        [catId]: catExpenses. filter(e => e.id !== id)
      };
    }

    default:
      return state;
    
  }

}