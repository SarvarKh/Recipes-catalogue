import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import selectedMealReducer from './selectedMealReducer';
import categoriesReducer from './categoriesReducer'

const rootReducer = combineReducers({
  meals: mealsReducer,
  selectedMeal: selectedMealReducer,
  categories: categoriesReducer,
});

export default rootReducer;
