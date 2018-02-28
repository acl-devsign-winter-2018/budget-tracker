import { category, CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY } from './reducers';


it('Has a default of empty array', () => {
  const state = category(undefined, {});
  expect(state).toEqual([]);
});

const categoryToAdd = {
  id: 123,
  timestamp: new Date(),
  name: 'groceries',
  budget: 23
};

it('Add a category', () => {
  const state = category([], { type: CATEGORY_CREATE, payload: categoryToAdd });
  expect(state).toEqual([categoryToAdd]);
});

it('Destroy a category', () => {
  const state = category([categoryToAdd], { type: CATEGORY_DESTROY, payload: 123 });
  expect(state).toEqual([]);
});

it('Update a category', () => {
  const updated= {
    id: 123,
    timestamp: new Date(),
    name: 'bananas',
    budget: 23
  };

  const state = category([categoryToAdd], { type: CATEGORY_UPDATE, payload: updated });
  expect(state).toEqual([{ ...categoryToAdd, ...updated }]);
});