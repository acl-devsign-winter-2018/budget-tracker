import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducer';
import shortid from 'shortid';

export function addCategory(category) {
  category.id = shortid();
  category.timestamp = new Date();

  return {
    type: CATEGORY_ADD,
    payload: category
  };
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
}

export function removeCategory(id) {
  return {
    type: CATEGORY_REMOVE,
    payload: id
  };
}