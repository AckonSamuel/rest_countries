/* eslint-disable no-underscore-dangle */

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './slices/getCountries';

const MyMiddlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    countryReducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MyMiddlewares),
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
