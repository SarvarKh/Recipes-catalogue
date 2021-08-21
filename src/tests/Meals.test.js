import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Meals from '../components/presentation/Meals';

const meals = [
  {
    strMeal: 'Apam balik',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
    idMeal: '53049'
  },
  {
    strMeal: 'Apple & Blackberry Crumble',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
    idMeal: '52893'
  },
];

const clickOnDetailMeal = () => (
    console.log('Test Meals and logging Meals')
)

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});