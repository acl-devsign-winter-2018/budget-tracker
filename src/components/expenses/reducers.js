import { CATEGORY_ADD, CATEGORY_DELETE, CATEGORY_LOAD } from '../categories/reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';


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
        [categoryId]: catExpenses.filter(e => e.id !== id)  
      };
    }

    case EXPENSE_UPDATE: {
      const { categoryId, id } = payload;
      const catExpenses = state[categoryId];
      const index = catExpenses.findIndex(e => e.id === id);
      return { 
        ...state,
        [categoryId]: [
          ...catExpenses.slice(0, index),
          { ...payload }, 
          ...catExpenses.slice(index + 1)
        ]

      };
    }

    default:
      return state;
  }
}