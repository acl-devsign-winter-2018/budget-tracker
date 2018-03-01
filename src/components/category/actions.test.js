import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from '../reducers/reducers';
import { addCategory, updateCategory, removeCategory } from './actions';

it('creates an add action', () => {
  const { type, payload } = addCategory({ category: 'Beer' });

  expect(type).toBe(CATEGORY_ADD)
  const { category, id, timestamp } = payload;
  expect(category).toBe('Beer');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});