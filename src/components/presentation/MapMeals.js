import { Link } from 'react-router-dom';

const MapMeals = ({ meals, clickOnDetailMeal }) => (
  meals.map((meal) => (
    <Link
      to={{
        pathname: `/detail/${meal.idMeal}`,
        state: meal,
      }}
      key={meal.idMeal}
      className="meal"
      onClick={() => clickOnDetailMeal(meal.idMeal)}
    >
      <div className="img-container">
        <img src={meal.strMealThumb} alt="Meal" />
      </div>
      <h3>{meal.strMeal}</h3>
    </Link>
  ))
);

export default MapMeals;
