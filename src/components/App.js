import { indexOf } from "lodash";
import React, { useEffect } from "react";
import { fetchCategories, fetchMeals } from "../actions";
import { connect } from 'react-redux';

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
      <h1>Categories</h1>
      <div className="flex categories-container">
        {
          categories !== undefined ?
            categories.map(category => (
              <a onClick={() => handleClick(category.strCategory)} key={category.idCategory}>  
                <div className="category">
                  <img src={category.strCategoryThumb} />
                  {category.strCategory}
                  <p className="category-desc">{category.strCategoryDescription}</p>
                </div>
              </a>
            ))
          : <h2>Loading...</h2>
        
        }
      </div>

      <h1>Meals</h1>
      <div className="flex meal-container">
        {
          meals !== undefined ?
            meals.map(meal => (
              <div key={meal.idMeal} className="meal">
                <h3>{meal.strMeal}</h3>
                <div className="img-container">
                  <img src={meal.strMealThumb} />
                </div>
              </div>
            ))
          : <h2>Loading...</h2>
        }
      </div>
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
