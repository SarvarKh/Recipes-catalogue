import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Table from '../components/presentation/Table';

const detailMeal = {
  strIngredient1: 'strIngredient1',
  strIngredient2: 'strIngredient2',
  strIngredient3: 'strIngredient3',
  strIngredient4: 'strIngredient4',
  strIngredient5: 'strIngredient5',
  strIngredient6: 'strIngredient6',
  strIngredient7: 'strIngredient7',
  strIngredient8: 'strIngredient8',
  strIngredient9: 'strIngredient9',
  strIngredient10: 'strIngredient10',
  strMeasure1: 'strMeasure1',
  strMeasure2: 'strMeasure2',
  strMeasure3: 'strMeasure3',
  strMeasure4: 'strMeasure4',
  strMeasure5: 'strMeasure5',
  strMeasure6: 'strMeasure6',
  strMeasure7: 'strMeasure7',
  strMeasure8: 'strMeasure8',
  strMeasure9: 'strMeasure9',
  strMeasure0: 'strMeasure0',
  strMeasure10: 'strMeasure10',
};

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Table detailMeal={detailMeal} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
