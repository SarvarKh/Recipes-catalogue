import React, { useEffect } from "react";
import {
  fetchCategories,
  fetchMeals,
  fetchDetailMeal,
  fetchByName,
  fetchByIngridient,
  fetchByArea,
} from "../actions/index";
import { connect } from 'react-redux';
import Categories from './Categories';
import Meals from './Meals'

function App({
  fetchMeals,
  fetchCategories,
  fetchDetailMeal,
  fetchByName,
  fetchByIngridient,
  fetchByArea,
  meals,
  categories
}) {  
  useEffect(() => {
    fetchMeals('Beef');
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchDetailMeal('52874');
  }, []);

  const handleClick = (e) => {
    fetchMeals(e);
  }

  const clickOnDetailMeal = (e) => {
    fetchDetailMeal(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    e.target[0].name === "by-name" ?
        fetchByName(inputValue)
      :
        fetchByIngridient(inputValue);
        fetchByArea(inputValue);
  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search meal by name, main ingredient, area" name="by-name" />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search meal by name, main ingredient, area" name="by-cat-and-area" />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>

      <Categories categories={categories} handleClick={handleClick} />
      <Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} />
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    meals: state.meals.meals,
    categories: state.categories.categories,
  }
}

export default connect(mapStateToProps, { fetchMeals, fetchCategories, fetchDetailMeal, fetchByName, fetchByIngridient, fetchByArea })(App);
