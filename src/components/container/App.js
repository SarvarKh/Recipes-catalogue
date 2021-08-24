import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCategories,
  fetchMeals,
  fetchDetailMeal,
  fetchByIngridient,
  fetchByArea,
} from '../../actions/index';
import Categories from '../presentation/Categories';
import Meals from '../presentation/Meals';

function App({
  fetchMeals,
  fetchCategories,
  fetchDetailMeal,
  fetchByIngridient,
  fetchByArea,
  meals,
}) {
  useEffect(() => {
    fetchMeals('Beef');
    fetchCategories();
  }, []);

  const handleClick = (e) => {
    fetchMeals(e);
  };

  const clickOnDetailMeal = (e) => {
    fetchDetailMeal(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    fetchByIngridient(inputValue);
    fetchByArea(inputValue);
  };

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search meal by main ingredient (e.g. Chicken Breast) and area (e.g. American, Canadian)" name="by-cat-and-area" />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>

      <Categories handleClick={handleClick} />
      <Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  meals: state.meals.meals,
});

export default connect(mapStateToProps, {
  fetchMeals, fetchCategories, fetchDetailMeal, fetchByIngridient, fetchByArea,
})(App);

App.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
  fetchMeals: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchDetailMeal: PropTypes.func.isRequired,
  fetchByIngridient: PropTypes.func.isRequired,
  fetchByArea: PropTypes.func.isRequired,
};
