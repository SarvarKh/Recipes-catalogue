import PropTypes from 'prop-types';
import MapMeals from './MapMeals';

const Meals = ({ meals, clickOnDetailMeal }) => (
  <>
    <h1 className="titles t-meal">Meals</h1>
    <div className="flex meal-container">
      {
                meals !== undefined
                  ? <MapMeals meals={meals} clickOnDetailMeal={clickOnDetailMeal} />
                  : <h2>Loading...</h2>
                }
    </div>
  </>
);

export default Meals;

Meals.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  clickOnDetailMeal: PropTypes.func.isRequired,
};
