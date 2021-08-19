import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import detailMealReducer from './detailMealReducer';
import categoriesReducer from './categoriesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
  detailMeal: detailMealReducer,
  categories: categoriesReducer,
  searchedItems: searchReducer,
});

export default rootReducer;
