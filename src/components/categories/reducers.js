export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';


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
    case CATEGORY_DESTROY:
      return state.filter(c => c.id !== payload);
    
    default:
      return state;
  }
}