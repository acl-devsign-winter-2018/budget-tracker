import { categories, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE, CATEGORY_LOAD } from './categoryReducers';

const categoryToAdd = {
  id: 111,
  timestamp: new Date(),
  category: 'Utilities',
  budget: 300
};

it('loads categories', () => {
  const categoriesToLoad = [
    { id: 111, category: 'Paper', budget: 65 },
    { id: 121, category: 'Sandals', budget: 165 }
  ];
  const state = categories([], { type: CATEGORY_LOAD, payload: categoriesToLoad });
  expect(state).toEqual(categoriesToLoad);
});

it('default empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

it('add a category', () => {
  const state = categories([], { type: CATEGORY_ADD, payload: categoryToAdd });
  expect(state).toEqual([categoryToAdd]);
});

it('category remove', () => {
  const state = categories([categoryToAdd], { type: CATEGORY_REMOVE, payload: 111 });
  expect(state).toEqual([]);
});

it('category update', () => {
  const update = {
    id: 111,
    budget: 200
  };

  const state = categories([categoryToAdd], { type: CATEGORY_UPDATE, payload: update });
  expect(state).toEqual([{ ...categoryToAdd, ...update }]);
});
