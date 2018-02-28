import { addCategory, updateCategory, destroyCategory } from './actions';
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

const categoryToAdd = {
  id: 123,
  timestamp: '2/28/18',
  name: 'groceries',
  budget: 23
};

it('creates an update action', () => {
  const action = updateCategory(categoryToAdd);
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: {
      id: 123,
      timestamp: '2/28/18',
      name: 'groceries',
      budget: 23
    }
  });
});

it('creates a remove action', () => {
  const action = destroyCategory(123);
  expect(action).toEqual({
    type: CATEGORY_DESTROY,
    payload: 123
  });
});