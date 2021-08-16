import { FETCH_MEALS } from '../actions/types';
import { FETCH_CATEGORIES } from '../actions/types';
import { FETCH_DETAIL_MEAL } from '../actions/types';

const fetchMeals = (category) => dispatch => {
    const abortCont = new AbortController();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_MEALS,
                payload: data.meals
            })
        );
    
    return () => abortCont.abort();
}

const fetchCategories = () => dispatch => {
    const abortCont = new AbortController();

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_CATEGORIES,
                payload: data.categories,
            })
        );

    return () => abortCont.abort();
}

const fetchDetailMeal = (mealID) => dispatch => {
    const abortCont = new AbortController();

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_DETAIL_MEAL,
                payload: data.meals[0],
            })
        );
    
    return () => abortCont.abort();
}

export { fetchMeals, fetchCategories, fetchDetailMeal };
