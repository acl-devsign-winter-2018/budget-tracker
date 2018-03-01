import { categories, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from '../reducers/categoryReducers';
const categoryToAdd = {
  id: 123,
  timestamp: new Date(),
  category:'Utilities',
  budget: 100
};

it('defaults to an empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

it('adds a category', () => {
  const state = categories([], { type: CATEGORY_ADD, payload: categoryToAdd });
  expect(state).toEqual([categoryToAdd]);
});

it('removes a category', () => {
  const state = categories([categoryToAdd], { type: CATEGORY_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});

it('updates a category', () => {
  const update = {
    id: 123,
    budget: 500
  };

  const state = categories([categoryToAdd], { type: CATEGORY_UPDATE, payload: update });
  expect(state).toEqual([{ ...categoryToAdd, ...update }]);
});

