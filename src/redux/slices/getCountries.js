/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../common';

const initialState = {
  countries: [],
  error: '',
  loading: false,
  nameSearch: [],
  regionFilter: [],
  search: '',
  filter: '',
};

export const countriesFetch = createAsyncThunk('countries/countriesFetch', async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);

    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch countries');
  }
});

const countriesFetchSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchTitle: (state, action) => {
      const innerFilter = state.regionFilter.length > 0 ? state.regionFilter : state.countries;
      const filteredCountries = innerFilter
        .filter((country) => country.name.common
          .toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        nameSearch: action.payload === '' ? [] : filteredCountries,
      };
    },
    filterRegion: (state, action) => {
      const filteredCountries = state.countries
        .filter((country) => country.region
          .toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        regionFilter: action.payload === '' ? [] : filteredCountries,
      };
    },
    search: (state, action) => ({
      ...state,
      search: action.payload,
    }),
    filter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(countriesFetch.pending, (state) => {
      state.loading = true;
      state.countries = {};
      state.error = '';
    });
    builder.addCase(countriesFetch.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(countriesFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.countries = {};
    });
  },
});

const { actions, reducer } = countriesFetchSlice;

export const {
  searchTitle,
  filterRegion,
  search,
  filter,
} = actions;

export default reducer;
