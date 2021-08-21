import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Categories from '../components/presentation/Categories';

const categories = undefined;

const handleClick = () => (
    console.log('Test Categories and logging categories')
)

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Categories categories={categories} handleClick={handleClick} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});