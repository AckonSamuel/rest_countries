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

const clubsFetchSlice = createSlice({
  name: "clubs",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(clubsFetch.pending, (state) => {
      state.loading = true;
      state.clubs = {};
      state.error = "";
    });
    builder.addCase(clubsFetch.fulfilled, (state, action) => {
      state.clubs = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(clubsFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.clubs = {};
    });
  },
});

export default clubsFetchSlice;
