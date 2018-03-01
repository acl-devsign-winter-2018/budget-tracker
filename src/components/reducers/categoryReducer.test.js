import { categories, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './reducers';
const categoryToAdd = {
  id: 123,
  timestamp: new Date(),
  category:'Utilities',
  subCategory: 'Water',
  budget: 100
};

it('defaults to an empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});
