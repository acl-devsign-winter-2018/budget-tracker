import { CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY, CATEGORY_LOAD } from './reducers';
import expenseApi from '../../services/expenseApi';
import shortid from 'shortid';

export function loadCategories() {
  return dispatch => {
    return expenseApi.load()
      .then(categories => {
        dispatch({
          type: CATEGORY_LOAD,
          payload: categories
        });
      });
  };
}



// category may be an issue
export function addCategory(category) {

  category.id = shortid();
  category.timestamp = new Date();

  return {
    type: CATEGORY_CREATE,
    payload: category
  };
}

export function updateCategory(category){
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
}

export function destroyCategory(id){
  return {
    type: CATEGORY_DESTROY,
    payload: id
  };
}