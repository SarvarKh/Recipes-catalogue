import detailMealReducer from '../../reducers/detailMealReducer';

test('should return the initial state', () => {
  expect(detailMealReducer(undefined, {})).toEqual({})
})

test('should add a detail deal to redux store', () => {
  const previousState = {
    detailMeal: {},
    meals: [],
    categories: [],
    searchedItems: [],
  };
  const action = {
    type: 'FETCH_DETAIL_MEAL',
    payload: "New meal",
  }
  expect(detailMealReducer(previousState, action)).toEqual({
    detailMeal: "New meal",
    meals: [],
    categories: [],
    searchedItems: [],
  })
})