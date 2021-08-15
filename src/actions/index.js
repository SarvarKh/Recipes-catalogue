import { FETCH_MEALS } from '../actions/types';
import { FETCH_CATEGORIES } from '../actions/types';
import { SELECT_CATEGORY } from '../actions/types';

const fetchMeals = (meals) => ({
    type: FETCH_MEALS,
    payload: meals,
})

const fetchCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    payload: categories,
})

const selectCategory = (selectedCategory) => ({
    type: FETCH_MEALS,
    payload: selectedCategory,
})

export { fetchMeals, fetchCategories, selectCategory };
