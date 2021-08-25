import mealsReducer from '../../reducers/mealsReducer';

test('should return the initial state', () => {
  expect(mealsReducer(undefined, {})).toEqual({});
});

test('should add meals to redux store', () => {
  const previousState = {
    detailMeal: {},
    meals: [],
    categories: [],
    searchedItems: [],
  };
  const action = {
    type: 'FETCH_MEALS',
    payload: ['New meal', 'Bunch of meals'],
  };
  expect(mealsReducer(previousState, action)).toEqual({
    detailMeal: {},
    meals: ['New meal', 'Bunch of meals'],
    categories: [],
    searchedItems: [],
  });
});
