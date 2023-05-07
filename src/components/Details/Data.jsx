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
        cca2,
        altSpellings,
        region,
        population,
        subregion,
        capital,
        borders,
        currencies,
        languages,
        tld
    } = country;

    let borderArr = [];

    const extractCountry = (filterCo) => {
        filterCo.forEach((country) => {
            borders && borders.includes(country.cca3) && borderArr.push(country.name.common);
            console.log(borderArr);
        })
    };

    const filterCountries = countries.filter((country) => country.region === region);
    filterCountries.length > 0 && extractCountry(filterCountries);

    const native  = () => {
        const newAlt = altSpellings.filter((spell) => spell !== cca2 && spell !== name.offical);
        const newObj = Object.values(name.nativeName).map(nameObj => nameObj.official);
        return newAlt.length > 0 && newAlt.filter((obn) => !newObj.includes(obn))
       // && !spell.includes(Object.values(name.nativeName).map((na) => na.official).join())) : Object.values(name.nativeName)[0].common}
    };

    const countryData1 = {
        'Native name': Object.values(name.nativeName)[0].common,
        'Population': population.toLocaleString(),
        'Region': region,
        'Sub Region': subregion,
        'Capital': capital,
    };

    const countryData2 = {
        'Top Level Domain': tld[0],
        'Currencies': Object.values(currencies).map(curr => curr.name).join(", "),
        'Languages': Object.values(languages).join(", "),
    };

    const putTrans = (data) => {
        let properties = [];
        for (const property in data) {
          properties.push(
            <span key={property}>
              <strong>{property}:</strong> {data[property]}
              <br />
            </span>
          );
        }
        return properties;
      };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Typography variant="detailsTitle" component="h2" sx={{ flex: "0 0 100%", marginBottom: pxToRem(23),}}>
                {name.common}
            </Typography>
            <Typography variant="detailsContent" className="first-data">
                {putTrans(countryData1)}
            </Typography>
            <Typography variant="detailsContent" className="first-data">
            {putTrans(countryData2)}
            </Typography>
            {borderArr.length > 0 &&
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, flex: '0 0 100%', marginTop: pxToRem(70)}}>
                    <Typography variant="detailsContent"><strong>Border Countries:</strong></Typography>
                    <BorderCountries borderArr={borderArr} />
                </Box>
            }
        </Box>
    )
};

Data.propTypes = {
    country: PropTypes.objectOf(PropTypes.any).isRequired,
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Data;