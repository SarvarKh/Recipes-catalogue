import { indexOf } from "lodash";
import React, { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res => res.json())
    .then(data => setMeals(data.meals));

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(res => res.json())
    .then(data => setCategories(data.meals));
  }, [])

    return (
      <div>
        <h1>Categories</h1>
          <select className="nav-item appearance-none cursor-pointer">
            {categories.map(category => (
              <option key={indexOf(category)} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>


        <h1>Meals</h1>
        {
          meals.map(meal => (
            <div key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <div className="img-container">
                <img src={meal.strMealThumb} />
              </div>
            </div>
          ))
        }
      </div>
    )
}

export default App;
