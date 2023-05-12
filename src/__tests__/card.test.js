import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Card from '../components/Card';
import countries from '../assets/testdata';

it('renders correctly', () => {
  const filteredSearch = [];
  const searchText = '';

  const tree = renderer
    .create(
      <BrowserRouter>
        <Card countries={countries} filteredSearch={filteredSearch} searchText={searchText} />
        ,
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
