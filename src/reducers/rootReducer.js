import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import detailMealReducer from './detailMealReducer';
import categoriesReducer from './categoriesReducer'

const rootReducer = combineReducers({
  meals: mealsReducer,
  detailMeal: detailMealReducer,
  categories: categoriesReducer,
});

export default rootReducer;
