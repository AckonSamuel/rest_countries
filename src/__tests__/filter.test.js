import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../components/SelectFilter';

it('renders SelectFilter component correctly', () => {
  const filterContinent = 'Africa';
  const tree = renderer
    .create(
      <Filter filterContinent={filterContinent} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
