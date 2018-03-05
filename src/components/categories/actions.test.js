import { addCat, updateCat, removeCat } from './actions';
import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_DELETE } from './reducers';

it.skip('creates an action to add cat', () => {
  const { type, payload } = addCat({ budget: 3000 });
  expect(type).toBe(CATEGORY_ADD);
  const { budget, id, timestamp } = payload;
  expect(budget).toBe(3000);
  expect(id).toBeTruthy();
  expect(timestamp).toBeTruthy();
});

it.skip('creates an action to update cat', () => {
  const action = updateCat({ id: 111, budget: 3000 });
  expect(action).toEqual({
    type: CATEGORY_UPDATE,
    payload: {
      id: 111,
      budget: 3000
    }
  });
});

it.skip('create an action to remove cat', () => {
  const action = removeCat(111);
  expect(action).toEqual({
    type: CATEGORY_DELETE,
    payload: 111
  });
});
