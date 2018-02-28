import { category, CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY } from './reducers';


it('Has a default of empty array', () => {
  const state = category(undefined, {});
  expect(state).toEqual([]);
});

