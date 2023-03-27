import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BorderCountries from './BorderCountries';

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

    return (
        <Box>
            <Typography variant="h1" component="h2">
                {name.common}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="first-data">
                Native Name: {Object.values(name.nativeName)[0].common} <br />
                Population: {population.toLocaleString()} <br />
                Region: {region} <br />
                Sub Region: {subregion} <br />
                Capital: {capital}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="first-data">
                Top Level Domain: {tld[0]} <br />
                Currencies: {Object.values(currencies).map(curr => curr.name).join(", ")} <br />
                Languages: {Object.values(languages).join(", ")} <br />
            </Typography>
            {borderArr.length > 0 &&
                <Box>
                    <Typography>Border Countries:</Typography>
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