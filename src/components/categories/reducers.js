export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';


export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_UPDATE: {
      const index = state.findIndex(c => c.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }
    case CATEGORY_DELETE:
      return state.filter(c => c.id !== payload);
    
    default:
      return state;
  }
}