import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Return from '../components/Details/Return';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Return />
      </BrowserRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
