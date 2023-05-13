import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BorderCountries from './BorderCountries';
import pxToRem from '../../assets/theme/pxToRem';

const Data = ({ country }) => {
  const countries = useSelector((state) => state.countryReducer.countries, shallowEqual);
  const {
    name,
    region,
    population,
    subregion,
    capital,
    borders,
    currencies,
    languages,
    tld,
  } = country;

  const borderArr = [];

  const extractCountry = (filterCo) => {
    filterCo.forEach((countr) => {
      if (borders && borders.includes(countr.cca3)) {
        borderArr.push(countr.name.common);
      }
    });
  };

  const filterCountries = countries.filter((coun) => coun.region === region);
  const woek = () => filterCountries.length > 0 && extractCountry(filterCountries);
  woek();

  const countryData1 = {
    'Native name': Object.values(name.nativeName)[0].common,
    Population: population.toLocaleString(),
    Region: region,
    'Sub Region': subregion,
    Capital: capital,
  };

  const countryData2 = {
    'Top Level Domain': tld ? tld[0] : 'n/a',
    Currencies: Object.values(currencies).map((curr) => curr.name).join(', '),
    Languages: Object.values(languages).join(', '),
  };

  const putTrans = (data) => {
    const properties = [];
    Object.keys(data).forEach((property) => {
      properties.push(
        <span key={property}>
          <strong>
            {property}
            :
          </strong>
          {' '}
          {data[property]}
          <br />
        </span>,
      );
    });
    return properties;
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="detailsTitle"
        component="h2"
        sx={{
          flex: '0 0 100%',
          marginBottom: pxToRem(23),
        }}
      >
        {name.common}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="detailsContent"
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: pxToRem(14),
              },
            }}
            className="first-data"
          >
            {putTrans(countryData1)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="detailsContent"
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: pxToRem(14),
              },
            }}
            className="first-data"
          >
            {putTrans(countryData2)}
          </Typography>
        </Grid>
      </Grid>
      {borderArr.length > 0
                && (
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  flex: '0 0 100%',
                  marginTop: pxToRem(70),
                  [theme.breakpoints.down('md')]: {
                    marginTop: pxToRem(40),
                  },
                }}
                >
                  <Typography variant="detailsContent"><strong>Border Countries:</strong></Typography>
                  <BorderCountries borderArr={borderArr} />
                </Box>
                )}
    </Box>
  );
};

Data.defaultProps = {
  country: {
    name: {
      common: 'n/a',
    },
    borders: ['n/a'],
    subregion: 'n/a',
    currencies: {},
    languages: {},
    tld: ['n/a'],
    cca3: 'n/a',
    flagsalt: 'n/a',
    flagsvg: 'n/a',
    region: 'n/a',
    population: 0,
    capital: ['n/a'],
  },
};

Data.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string,
      official: PropTypes.string,
      nativeName: PropTypes.objectOf(
        PropTypes.shape({
          official: PropTypes.string,
          common: PropTypes.string,
        }),
      ),
    }),
    borders: PropTypes.arrayOf(PropTypes.string),
    subregion: PropTypes.string,
    currencies: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    languages: PropTypes.objectOf(PropTypes.string),
    tld: PropTypes.arrayOf(PropTypes.string),
    cca3: PropTypes.string,
    flagsalt: PropTypes.string,
    flagsvg: PropTypes.string,
    region: PropTypes.string,
    population: PropTypes.number,
    capital: PropTypes.arrayOf(PropTypes.string),
  }),
};

// Write an appropriate proptypes code for Data component

export default Data;
