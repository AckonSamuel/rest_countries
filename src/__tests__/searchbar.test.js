import React from 'react';
import renderer from 'react-test-renderer';
import Searchbar from '../components/Searchbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Searchbar />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
