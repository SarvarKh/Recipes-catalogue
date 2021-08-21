import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MapCategories from '../components/presentation/MapCategories';

const categories = [
    {
        strCategory: 'Beef',
        idCategory: '88',
        strCategoryThumb: 'beef',
        strCategoryDescription: 'Culinary name...',
    },
    {
        strCategory: 'Lamb',
        idCategory: '92',
        strCategoryThumb: 'lamb',
        strCategoryDescription: 'Culinary name...',
    }
];

const handleClick = () => (
    console.log('Test MapCategories and logging category name')
)

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><MapCategories categories={categories} handleClick={handleClick} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});