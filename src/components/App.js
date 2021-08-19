import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchCategories,
  fetchMeals,
  fetchDetailMeal,
  fetchByIngridient,
  fetchByArea,
} from '../actions/index';
import Categories from './Categories';
import Meals from './Meals';

function App({
  fetchMeals,
  fetchCategories,
  fetchDetailMeal,
  fetchByIngridient,
  fetchByArea,
  meals,
  categories,
}) {
  useEffect(() => {
    fetchMeals('Beef');
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = (e) => {
    fetchMeals(e);
  };

  const clickOnDetailMeal = (e) => {
    fetchDetailMeal(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    fetchByIngridient(inputValue);
    fetchByArea(inputValue);
  };

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search meal by main ingredient (e.g. Chicken Breast) and area (e.g. American, Canadian)" name="by-cat-and-area" />
        <button type="submit"><i className="fas fa-search" /></button>
      </form>

      <Categories categories={categories} handleClick={handleClick} />
      <Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  meals: state.meals.meals,
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  fetchMeals, fetchCategories, fetchDetailMeal, fetchByIngridient, fetchByArea,
})(App);
