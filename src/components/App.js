import React, { useEffect } from "react";
import { fetchCategories, fetchMeals } from "../actions";
import { connect } from 'react-redux';
import Categories from './Categories';
import Meals from './Meals'

function App({fetchMeals, fetchCategories, meals, categories}) {  
  useEffect(() => {
    fetchMeals('Beef');
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = (e) => {
    fetchMeals(e);
  }

  return (
    <div>
      <Categories categories={categories} handleClick={handleClick} />
      <Meals meals={meals} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    meals: state.meals.meals,
    categories: state.categories.categories,
  }
}

export default connect(mapStateToProps, { fetchMeals, fetchCategories })(App);
