import { FETCH_MEALS } from '../actions/types';
import { FETCH_CATEGORIES } from '../actions/types';
import { FETCH_DETAIL_MEAL } from '../actions/types';
import { FETCH_BY_NAME } from '../actions/types';
import { FETCH_BY_INGRIDIENT } from '../actions/types';
import { FETCH_BY_AREA } from '../actions/types';

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

const fetchByName = (e) => dispatch => {
    const abortCont = new AbortController();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_BY_NAME,
                payload: data.meals !== null ? data.meals[0] : "",
            })
        );
    
    return () => abortCont.abort();
}
const fetchByIngridient = (e) => dispatch => {
    const abortCont = new AbortController();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`)
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_BY_INGRIDIENT,
                payload: data,
            })
        );
    
    return () => abortCont.abort();
}

const fetchByArea = (e) => dispatch => {
    const abortCont = new AbortController();

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e}`)
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: FETCH_BY_AREA,
                payload: data.meals,
            })
        );
    
    return () => abortCont.abort();
}

export { fetchMeals, fetchCategories, fetchDetailMeal, fetchByName, fetchByIngridient, fetchByArea };
