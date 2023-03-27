import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// react-router components
import { Routes, Route } from "react-router-dom";

// @mui material components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "./createEmotionCache";

// react components
import Homepage from './components/Homepage';
import Welcome from './components/Welcome';
import Details from './components/Details';

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

  const filterListener = (region) => {
    dispatch(filterRegion(region));
    dispatch(filter(region));
  }

  const filteredSearch = useSelector((state) => state.countryReducer.nameSearch, shallowEqual);
  const searchText = useSelector((state) => state.countryReducer.search, shallowEqual);
  const filterContinent = useSelector((state) => state.countryReducer.filter, shallowEqual);
  const filteredRegion = useSelector((state) => state.countryReducer.regionFilter, shallowEqual);


  if ( filteredSearch.length !== 0  && filteredRegion.length === 0 ) {
    countries = filteredSearch;
  } else if ( filteredSearch.length === 0  && filteredRegion.length !== 0 ) {
    countries = filteredRegion;
  } else if ( filteredSearch.length !== 0 && filteredRegion.length !== 0) {
    countries = filteredSearch;
  }

  const getRoutes = () => {

    if (countries.length > 0) {
      return <Routes>
        <Route exact path="/" element={
        <Homepage 
        filteredSearch={filteredSearch}
        searchText={searchText}
        filterContinent={filterContinent}
        filterListener={filterListener}
        countries={countries}
        textListener={textListener} 
        />} key="okay"/>
        <Route exact path="/details/:common" element={<Details countries={countries} />} />;
        </Routes>
    }
    else
      return <Routes><Route exact path="/" element={<Welcome />} /></Routes>
  }


  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {getRoutes()}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;