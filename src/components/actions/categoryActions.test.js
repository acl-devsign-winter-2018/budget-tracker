import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from '../reducers/categoryReducers';
import { addCategory, updateCategory, removeCategory } from './categoryActions';

it('creates an add action', () => {
  const { type, payload } = addCategory({ category: 'Fun', subCategory: 'trees' });
  expect(type).toBe(CATEGORY_ADD);
  const { category, subCategory, id, timestamp } = payload;
  expect(subCategory).toBe('trees');
  expect(category).toBe('Fun');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it('creates an update action', () => {
  const action = updateCategory({ id: 111, subCategory: 'phone' });
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: {
      id: 111,
      subCategory: 'phone'
    }
  });
});

it('creates a remove action', () => {
  const action = removeCategory(111);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: 111
  });
});