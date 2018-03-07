import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from '../reducers/categoryReducers';
import { addCategory, updateCategory, removeCategory } from './categoryActions';

it.skip('creates an add action', () => {
  const { type, payload } = addCategory({ category: 'Fun', budget: '300' });
  expect(type).toBe(CATEGORY_ADD);
  const { category, id, timestamp, budget } = payload;
  expect(category).toBe('Fun');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
  expect(budget).toBe('300');
});

it.skip('creates an update action', () => {
  const action = updateCategory({ id: 111, budget: 200 });
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: {
      id: 111,
      budget: 200
    }
  });
});

it.skip('creates a remove action', () => {
  const action = removeCategory(111);
  expect(action).toEqual({
    type: CATEGORY_REMOVE,
    payload: 111
  });
});