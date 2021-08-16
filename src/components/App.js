import React, { useEffect } from "react";
import { fetchCategories, fetchMeals, fetchDetailMeal } from "../actions/index";
import { connect } from 'react-redux';
import Categories from './Categories';
import Meals from './Meals'

function App({fetchMeals, fetchCategories, fetchDetailMeal, meals, categories}) {  
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

  return (
    <div>
      <Categories categories={categories} handleClick={handleClick} />
      <Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    meals: state.meals.meals,
    categories: state.categories.categories,
  }
}

export default connect(mapStateToProps, { fetchMeals, fetchCategories, fetchDetailMeal })(App);
