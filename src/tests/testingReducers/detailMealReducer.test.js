import detailMealReducer from '../../reducers/detailMealReducer';

test('should return the initial state', () => {
  expect(detailMealReducer(undefined, {})).toEqual({})
})