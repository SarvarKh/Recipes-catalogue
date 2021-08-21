import categoriesReducer from '../../reducers/categoriesReducer';

test('should return the initial state', () => {
  expect(categoriesReducer(undefined, {})).toEqual([])
})

test('should add a category redux store', () => {
  const previousState = {
    detailMeal: {},
    meals: [],
    categories: [],
    searchedItems: [],
  };
  const action = {
    type: 'FETCH_CATEGORIES',
    payload: 'New category',
  }
  expect(categoriesReducer(previousState, action)).toEqual({
    detailMeal: {},
    meals: [],
    categories: 'New category',
    searchedItems: [],
  })
})