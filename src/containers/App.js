import React, { useState, useEffect } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: ["Not fetched yet"]
    }
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => res.json())
      .then(data => this.setState({meals: data.meals}));
  }

  render() {
    const mealItems = this.state.meals.map(meal => (
      <div key={meal.idMeal}>
        <h3>{meal.strMeal}</h3>
        <div className="img-container">
          <img src={meal.strMealThumb} />
        </div>
      </div>
    ))
    return (
      <div>
        <h1>Meals</h1>
        {mealItems}
      </div>
    )
  }
}

export default App;
