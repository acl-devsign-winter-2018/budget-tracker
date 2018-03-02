import { categories, CATEGORY_ADD } from './reducer';

it('Has a default of empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const categoryToAdd = {
  id: 123,
  timestamp: new Date(),
  text: 'I am a category'
};

it('Add a note', () => {
  const state = categories([], { type: CATEGORY_ADD, payload: categoryToAdd });
  expect(state).toEqual([categoryToAdd]);
});