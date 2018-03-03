import { CATEGORY_ADD, CATEGORY_LOAD, CATEGORY_UPDATE, CATEGORY_REMOVE } from '../reducers/categoryReducers';
import budgetApi from '../../services/budgetApi';

export function loadCategories() {
  return dispatch => {
    return budgetApi.load()
      .then(categories => {
        categories.map(category => category.category = category.name);
        dispatch({
          type: CATEGORY_LOAD,
          payload: categories
        });
      });
  };
}

export function addCategory(category) {
  category.name = category.category;
  return dispatch => {
    return budgetApi.add(category)
      .then(savedCategory => {
        savedCategory.category = savedCategory.name;
        const action = {
          type: CATEGORY_ADD,
          payload: savedCategory
        };
        dispatch(action);
      });
  };
}

export function updateCategory(category) {
  category.name = category.category;
  return dispatch => {
    return budgetApi.update(category)
      .then(updatedCategory => {
        updatedCategory.category = updatedCategory.name;
        dispatch({
          type: CATEGORY_UPDATE,
          payload: updatedCategory
        });
      });
  };
 
}

export function removeCategory(id) {
  return dispatch => {
    return budgetApi.remove(id)
      .then(() => {
        dispatch({
          type: CATEGORY_REMOVE,
          payload: id
        });
      });
  };
}
