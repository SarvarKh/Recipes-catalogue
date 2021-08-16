import { FETCH_MEALS } from '../actions/types';
import { FETCH_CATEGORIES } from '../actions/types';
import { SELECT_CATEGORY } from '../actions/types';

const fetchMeals = () => dispatch => {
    const abortCont = new AbortController();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_MEALS,
                payload: data.meals
            })
        );
    
    return () => abortCont.abort();
}

const fetchCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    payload: categories,
})

const selectCategory = (selectedCategory) => ({
    type: SELECT_CATEGORY,
    payload: selectedCategory,
})

export { fetchMeals, fetchCategories, selectCategory };
