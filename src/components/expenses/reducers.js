import { CATEGORY_ADD, CATEGORY_DELETE, CATEGORY_LOAD } from '../categories/reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export function expensesByCat(state = {}, { type, payload }) {
  switch(type) {

    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});

    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };

    case CATEGORY_DELETE: {
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

    case EXPENSE_DELETE: {
      const { catId, id } = payload;
      const catExpenses = state[catId];
      return {
        ...state,
        // throwing 'cannot read property filter of undefined' for this line:
        [catId]: catExpenses.filter(e => e.id !== id)  
      };
    }

    default:
      return state;
    
  }

}