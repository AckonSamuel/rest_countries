import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// react-router components
import { Routes, Route } from "react-router-dom";

// @mui material components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "./createEmotionCache";
import CountryList from "./components/Card";
import Welcome from './components/Welcome';

// redux funtions
import {
  countriesFetch,
  searchTitle,
  filterRegion,
  search,
  filter
} from './redux/slices/getCountries';

const App = () => {

  const cache = createEmotionCache();
  const theme = createTheme();

  const dispatch = useDispatch();
  let countries = useSelector((state) => state.countryReducer.countries, shallowEqual);

  useEffect(() => {
    dispatch(countriesFetch());
  }, [dispatch]);


  const textListener = (country_name) => {
    dispatch(searchTitle(country_name));
    dispatch(search(country_name));
  };

  const filteredSearch = useSelector((state) => state.countryReducer.nameSearch, shallowEqual);
  const searchText = useSelector((state) => state.countryReducer.search, shallowEqual);

  if ( filteredSearch.length !== 0) {
    countries = filteredSearch;
  }

  const routes = [
    <Route exact path="/" element={<CountryList countries={countries} />} />,
  ];
  const getRoutes = () => {

    if (countries.length > 0) {
      return routes.values();
    }
    else
      return <Route exact path="/" element={<Welcome />} />;
  }


  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {getRoutes()}
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;