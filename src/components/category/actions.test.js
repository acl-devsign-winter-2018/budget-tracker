import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from '../reducers/categoryReducers';
import { addCategory, updateCategory, removeCategory } from './actions';

it('creates an add action', () => {
  const { type, payload } = addCategory({ category: 'Beer' });

  expect(type).toBe(CATEGORY_ADD);;
  const { category, id, timestamp } = payload;
  expect(category).toBe('Beer');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('creates an update action', () => {
  const action = updateCategory({ id: 123, category: 'vacation' });
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: {
      id: 123,
      category: 'vacation'
    }
  });
});

it('creates a remove action', () => {
  const action = removeCategory(123);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: 123
  });
  
});