import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
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
    filterCo.forEach((country) => {
      if (borders && borders.includes(country.cca3)) {
        borderArr.push(country.name.common);
      }
    });
  };

  const filterCountries = countries.filter((country) => country.region === region);
  const woek = () => filterCountries.length > 0 && extractCountry(filterCountries);
  woek();

  // const native = () => {
  //   const newAlt = altSpellings.filter((spell) => spell !== cca2 && spell !== name.offical);
  //   const newObj = Object.values(name.nativeName).map((nameObj) => nameObj.official);
  //   return newAlt.length > 0 && newAlt.filter((obn) => !newObj.includes(obn));

  // };

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

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <Typography variant="detailsTitle" component="h2" sx={{ flex: '0 0 100%', marginBottom: pxToRem(23) }}>
        {name.common}
      </Typography>
      <Typography variant="detailsContent" className="first-data">
        {putTrans(countryData1)}
      </Typography>
      <Typography variant="detailsContent" className="first-data">
        {putTrans(countryData2)}
      </Typography>
      {borderArr.length > 0
                && (
                <Box sx={{
                  display: 'flex', flexWrap: 'wrap', gap: 2, flex: '0 0 100%', marginTop: pxToRem(70),
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
    name: PropTypes.objectOf(PropTypes.shape({
      common: PropTypes.string,
      nativeName: PropTypes.objectOf(PropTypes.string),
    })),
    borders: PropTypes.arrayOf(PropTypes.string),
    subregion: PropTypes.string,
    currencies: PropTypes.objectOf(PropTypes.string),
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
