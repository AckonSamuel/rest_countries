import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configStore';
import Data from '../components/DetailsData';
import countries from '../assets/testdata';

it('renders data component correctly', () => {
  const country = countries[0];
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Data country={country} />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
