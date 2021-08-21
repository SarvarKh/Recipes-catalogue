import mealsReducer from '../../reducers/mealsReducer';

test('should return the initial state', () => {
  expect(mealsReducer(undefined, {})).toEqual({})
})