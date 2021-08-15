import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import selectedCategoryReducer from './selectedCategoryReducer';
import categoriesReducer from './categoriesReducer'

const rootReducer = combineReducers({
  meals: mealsReducer,
  selectedCategory: selectedCategoryReducer,
  categories: categoriesReducer,
});

export default rootReducer;
