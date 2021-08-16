import { indexOf } from "lodash";
import React, { useState, useEffect } from "react";
import { fetchMeals } from "../actions";
import { connect } from 'react-redux';

function App({fetchMeals, meals}) {
  const [selectedCategory, setSelectedCategory] = useState('Seafood');
  
  useEffect(() => {
    fetchMeals('Seafood');
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(res => res.json())
    .then(data => setCategories(data.meals));
  }, []);

  const handleFilter = (e) => {
    fetchMeals(e);
  }

  return (
    <div>
      <h1>Categories</h1>
      <select onChange={(e) => handleFilter(e.target.value)} className="nav-item appearance-none cursor-pointer">
        {categories.map(category => (
          <option key={categories.indexOf(category)} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>

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
        : <h1>Loading...</h1>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {meals: state.meals.meals}
}

export default connect(mapStateToProps, { fetchMeals })(App);
