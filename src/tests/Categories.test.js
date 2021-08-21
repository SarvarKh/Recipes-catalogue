import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../components/presentation/Categories';

const categories = [
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription: "Beef is the culinary name for meat from cattle",
  },
  {
    idCategory: "2",
    strCategory: "Lamb",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription: "Lamb is ...",
  },
];

const handleClick = () => (
    console.log('Test Categories and logging categories')
)

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Categories categories={categories} handleClick={handleClick} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});