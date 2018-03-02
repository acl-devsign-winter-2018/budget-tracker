export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_REMOVE:
      return state.filter(n => n.id !== payload);
    case CATEGORY_UPDATE: {
      const index = state.findIndex(n => n.id === payload.id);
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