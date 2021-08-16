import { indexOf } from "lodash";
import React, { useState, useEffect } from "react";
import { fetchCategories, fetchMeals } from "../actions";
import { connect } from 'react-redux';

function App({fetchMeals, fetchCategories, meals, categories}) {  
  useEffect(() => {
    fetchMeals('Beef');
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFilter = (e) => {
    fetchMeals(e);
  }

  return (
    <div>
      <h1>Categories</h1>
      {
        categories !== undefined ?
          <select onChange={(e) => handleFilter(e.target.value)} className="nav-item appearance-none cursor-pointer">
            {categories.map(category => (
              <option key={categories.indexOf(category)} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        : <h2>Loading...</h2>
      
      }

      <h1>Meals</h1>
      {
        meals !== undefined ?
          meals.map(meal => (
            <div key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <div className="img-container">
                <img src={meal.strMealThumb} />
              </div>
            </div>
          ))
        : <h2>Loading...</h2>
      }
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
