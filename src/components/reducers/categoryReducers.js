export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_LOAD = 'CATEGORY_LOAD';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD: 
      return payload;
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_REMOVE:
      return state.filter(category => category.id !== payload);
    case CATEGORY_UPDATE: {
      const index = state.findIndex(category => category.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }

}