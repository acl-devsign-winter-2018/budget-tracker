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
      const { categoryId } = payload;
      const catExpenses = state[categoryId];
      return {
        ...state,
        [categoryId]: [
          ... catExpenses,
          payload.savedExpense
        ]
      };
    }

    case EXPENSE_DELETE: {
      const { categoryId, id } = payload;
      const catExpenses = state[categoryId];
      return {
        ...state,
        // throwing 'cannot read property filter of undefined' for this line:
        [categoryId]: catExpenses.filter(e => e.id !== id)  
      };
    }

    default:
      return state;
    
  }

}