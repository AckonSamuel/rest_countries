import React from 'react';
import renderer from 'react-test-renderer';
import Searchbar from '../components/Searchbar';

it('renders searchbar component correctly', () => {
  const searchText = 'ghana';

  const tree = renderer
    .create(
      <Searchbar searchText={searchText} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
