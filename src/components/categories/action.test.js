import { addCategory } from './actions';
import{ CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY } from './reducers';

it ('creates an add action', () => {
  const { type, payload } = addCategory({ category: 'groceries', budget: 23});
  expect(type).toBe(CATEGORY_CREATE);
  const { category, id, timestamp, budget } = payload;
  expect(category).toBe('groceries');
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
  expect(budget).toBe(23);
});