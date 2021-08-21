import searchReducer from '../../reducers/searchReducer';

test('should return the initial state', () => {
  expect(searchReducer(undefined, {})).toEqual([])
})