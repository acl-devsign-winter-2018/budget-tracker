import { CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY } from './reducers';
import shortid from 'shortid';

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