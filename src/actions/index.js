import {
  FETCH_MEALS, FETCH_CATEGORIES, FETCH_DETAIL_MEAL, FETCH_BY_NAME,
} from './types';

const fetchMeals = (category) => (dispatch) => {
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_MEALS,
      payload: data.meals,
    }));

  return () => abortCont.abort();
};

const fetchCategories = () => (dispatch) => {
  const abortCont = new AbortController();

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_CATEGORIES,
      payload: data.categories,
    }));

  return () => abortCont.abort();
};

const fetchDetailMeal = (mealID) => (dispatch) => {
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_DETAIL_MEAL,
      payload: data.meals[0],
    }));

  return () => abortCont.abort();
};

const fetchByIngridient = (e) => (dispatch) => {
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`)
    .then((res) => res.json())
    .then((data) => (data.meals !== null
      ? dispatch({
        type: FETCH_MEALS,
        payload: data.meals,
      })
      : null))
    .catch((error) => {
      console.error('Error:', error);
    });

  return () => abortCont.abort();
};

const fetchByArea = (e) => (dispatch) => {
  const abortCont = new AbortController();

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e}`)
    .then((res) => res.json())
    .then((data) => (data.meals !== null
      ? dispatch({
        type: FETCH_MEALS,
        payload: data.meals,
      })
      : null));

  return () => abortCont.abort();
};

export {
  fetchMeals, fetchCategories, fetchDetailMeal, fetchByIngridient, fetchByArea,
};
