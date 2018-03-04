import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_DELETE } from './reducers';
import shortid from 'shortid';

export function addCat(cat) {
  cat.id = shortid();
  cat.timestamp = new Date();
  
  return {
    type: CATEGORY_ADD,
    payload: cat
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

