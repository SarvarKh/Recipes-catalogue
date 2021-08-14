import React, { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState(["Not fetched yet"]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res => res.json())
    .then(data => setMeals(data.meals));
  }, [])

    return (
      <div>
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
