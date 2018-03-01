export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_REMOVE: 
      return state.filter(n => n.id !== payload);
      //n is every obj in state, comp the id with the payload(id of thing to remove), if it doesn't match, keep it.
    case CATEGORY_UPDATE:{
      const index = state.findIndex(n => n.id === payload.id);
      //findINdex returns 1st match in arr for testing funct, we're saving it to index to use later to set where to splice.
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