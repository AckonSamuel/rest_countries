import {
  useState, useMemo, useEffect,
} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// react-router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import ColorModeContext from './context';
import createEmotionCache from './createEmotionCache';

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
  filter,
} from './redux/slices/getCountries';

// themes
import theme from './assets/theme';
import darkTheme from './assets/dark-theme';

const App = () => {
  const cache = createEmotionCache();

  // setting up theme

  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const dispatch = useDispatch();
  let countries = useSelector((state) => state.countryReducer.countries, shallowEqual);

  useEffect(() => {
    dispatch(countriesFetch());
  }, [dispatch]);

  const textListener = (countryName) => {
    dispatch(searchTitle(countryName));
    dispatch(search(countryName));
  };

  const filterListener = (region) => {
    dispatch(filterRegion(region));
    dispatch(filter(region));
  };

  const filteredSearch = useSelector((state) => state.countryReducer.nameSearch, shallowEqual);
  const searchText = useSelector((state) => state.countryReducer.search, shallowEqual);
  const filterContinent = useSelector((state) => state.countryReducer.filter, shallowEqual);
  const filteredRegion = useSelector((state) => state.countryReducer.regionFilter, shallowEqual);

  if (filteredSearch && filteredSearch.length !== 0 && filteredRegion.length === 0) {
    countries = filteredSearch;
  } else if (filteredSearch && filteredSearch.length === 0 && filteredRegion.length !== 0) {
    countries = filteredRegion;
  } else if (filteredSearch && filteredSearch.length !== 0 && filteredRegion.length !== 0) {
    countries = filteredSearch;
  }

  const getRoutes = () => {
    if (countries.length > 0) {
      return (
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <Homepage
                filteredSearch={filteredSearch}
                searchText={searchText}
                filterContinent={filterContinent}
                filterListener={filterListener}
                countries={countries}
                textListener={textListener}
              />
      )}
            key="okay"
          />
          <Route path="/details/:common" element={<Details countries={countries} />} />
          ;
        </Routes>
      );
    }
    return <Routes><Route exact path="/" element={<Welcome />} /></Routes>;
  };

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={mode === 'light' ? theme : darkTheme}>
            <CssBaseline />
            {getRoutes()}
          </ThemeProvider>
        </CacheProvider>
      </ColorModeContext.Provider>
    </Router>
  );
};

export default App;
