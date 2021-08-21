import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';
import DetailMeal from '../components/container/DetailMeal';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><DetailMeal /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
