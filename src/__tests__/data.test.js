import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Data from '../components/Details/Data';
import countries from '../assets/testdata';

it('renders data component correctly', () => {
  const country = countries[0];
  const tree = renderer
    .create(
      <BrowserRouter>
        <Data country={country} countries={countries} />
      </BrowserRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
