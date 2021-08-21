import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Meals from '../components/presentation/Meals';

const meals = undefined;

const clickOnDetailMeal = () => (
    console.log('Test Meals and logging Meals')
)

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Meals meals={meals} clickOnDetailMeal={clickOnDetailMeal} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});