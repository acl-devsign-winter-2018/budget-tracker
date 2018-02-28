export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function category(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_CREATE:
      return [
        ...state,
        payload
      ];

    case CATEGORY_UPDATE: {
      const index = state.findIndex(n => n.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }

    case CATEGORY_DESTROY: 
      return state.filter(n => n.id !== payload);

    default:
      return state;
  }
}
