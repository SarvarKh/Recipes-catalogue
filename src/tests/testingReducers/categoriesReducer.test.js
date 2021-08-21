import categoriesReducer from '../../reducers/categoriesReducer';

test('should return the initial state', () => {
  expect(categoriesReducer(undefined, {})).toEqual([])
})