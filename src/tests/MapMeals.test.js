import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MapMeals from '../components/presentation/MapMeals';

const meals = [
    {
        idMeal: '88',
        strMeal: 'Beef',
        strMealThumb: 'beef',
    },
    {
        idMeal: '92',
        strMeal: 'Lamb',
        strMealThumb: 'lamb',
    },
];

const clickOnDetailMeal = () => (
    console.log('Test MapMeals and logging meal name')
)

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><MapMeals meals={meals} clickOnDetailMeal={clickOnDetailMeal} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});