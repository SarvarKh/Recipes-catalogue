import searchReducer from '../../reducers/searchReducer';

test('should return the initial state', () => {
  expect(searchReducer(undefined, {})).toEqual([])
})

test('should search meals and add that meals arr to redux store', () => {
  const previousState = {
    detailMeal: {},
    meals: [],
    categories: [],
    searchedItems: [],
  };
  const action = {
    type: 'FETCH_BY_NAME',
    payload: ["Meal 01", "Meal 01", "Bunch of meals"],
  }
  expect(searchReducer(previousState, action)).toEqual({
    detailMeal: {},
    meals: [],
    categories: [],
    searchedItems: ["Meal 01", "Meal 01", "Bunch of meals"],
  })
})