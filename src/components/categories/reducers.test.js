import { categories, CATEGORY_ADD, CATEGORY_DELETE, CATEGORY_UPDATE } from './reducers';

it('Has default empty array', () => {
  const state = categories(undefined, {});
  expect(state).toEqual([]);
});

const catToAdd = {
  id: 111,
  timestamp: new Date(),
  name: 'Entertainment',
  budget: 3000
};

const secondToAdd = {
  id: 112,
  timestamp: new Date(),
  name: 'Rent',
  budget: 30
};


it('Add a category', () => {
  const state = categories([], { type: CATEGORY_ADD, payload: catToAdd });
  expect(state).toEqual([catToAdd]);
});

it('Adds additional category', () => {
  const state = categories([catToAdd], { type: CATEGORY_ADD, payload: secondToAdd });
  expect(state).toEqual([catToAdd, secondToAdd]);
});


it('Remove a category', () => {
  const state = categories([catToAdd], { type: CATEGORY_DELETE, payload: 111 });
  expect(state).toEqual([]);
});

it('Update a category', () => {
  const updated = {
    id: 111,
    budget: 200
  };

  const state = categories([catToAdd], { type: CATEGORY_UPDATE, payload: updated });
  expect(state).toEqual([{ ...catToAdd, ...updated }]);
});