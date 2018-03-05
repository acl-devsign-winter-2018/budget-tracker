import { CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY, CATEGORY_LOAD } from './reducers';
import expenseApi from '../../services/expenseApi';
//import shortid from 'shortid';

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
// export function addCategory(category) {

//   category.id = shortid();
//   category.timestamp = new Date();

//   return {
//     type: CATEGORY_CREATE,
//     payload: category
//   };
// }

export function addCategory(category) {

  return (dispatch)=>{
    return expenseApi.add(category)
      .then(savedCategory => {
        const action = {
          type: CATEGORY_CREATE,
          payload: savedCategory
        };

        dispatch(action);
      });
  }; 
}

export function updateCategory(category){
  return {
    type: CATEGORY_UPDATE,
    payload: category
  };
}

// export function destroyCategory(id){
//   return {
//     type: CATEGORY_DESTROY,
//     payload: id
//   };
// }

export function destroyCategory(id){
  return dispatch => {
    return expenseApi.remove(id)
      .then(() => {
        dispatch({
          type: CATEGORY_DESTROY,
          payload: id
        });
      });
  };
}
