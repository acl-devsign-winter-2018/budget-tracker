import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_DELETE, CATEGORY_LOAD } from './reducers';
import categoriesApi from '../../services/categoriesApi';

export function loadCats() {
  return dispatch => {
    return categoriesApi.load()
      .then(categories => {
        dispatch({
          type: CATEGORY_LOAD,
          payload: categories
        });
      });
  };
}

export function addCat(cat) {
  return (dispatch) => {
    return categoriesApi.add(cat)
      .then(savedCat => {
        const action = {
          type: CATEGORY_ADD,
          payload: savedCat
        };
        dispatch(action);
      });
  };  
}

export function updateCat(cat) {
  return {
    type: CATEGORY_UPDATE,
    payload: cat
  };
}

export function removeCat(id) {
  
  return {
    type: CATEGORY_DELETE,
    payload: id
  };
}

