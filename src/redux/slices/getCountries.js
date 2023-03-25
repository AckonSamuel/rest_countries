import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  countries: [],
  error: "",
  loading: false,
  titleSearch: [],
  regionFilter: [],
  search: '',
  filter: '',
};

export const countriesFetch = createAsyncThunk("countries/countriesFetch", async () => {
  const res = await axios.get(`${BASE_URL}/all`);

  return res.data;
});

const countriesFetchSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    searchTitle: (state, action) => {
      const filteredCountries = state.countries
      .filter((country) => country.name.official
      .toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        titleSearch: action.payload === '' ? [] : filteredCountries,
      };
    },
    filterRegion: (state, action) => {
      const filteredCountries = state.countries
      .filter((country) => country.region
      .lowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        regionFilter: action.payload === '' ? [] : filteredCountries,
      };
    },
    region: (state, action) => ({
      ...state,
      search: action.payload,
    }),
    filter: (state, action) => ({
      ...state,
      filter: action.payload,
    })
  },
  extraReducers: (builder) => {
    builder.addCase(countriesFetch.pending, (state) => {
      state.loading = true;
      state.countries = {};
      state.error = "";
    });
    builder.addCase(countriesFetch.fulfilled, (state, action) => {
      state.countries = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(countriesFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.countries = {};
    });
  },
});

export const {
  searchTitle,
  filterRegion,
  search,
  filter
} = countriesFetchSlice.actions;

export default countriesFetchSlice;
