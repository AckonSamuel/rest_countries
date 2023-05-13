import React from 'react';
import renderer from 'react-test-renderer';
import Homepage from '../components/Homepage';

it('renders homepage component correctly', () => {
  const tree = renderer
    .create(
      <Homepage />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
