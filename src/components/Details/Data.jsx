import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BorderCountries from './BorderCountries';

const Data = ({country}) => {
    const filterText = useSelector((state) => state.countryReducer.filter);
    const countries = useSelector((state) => state.countryReducer.countries);
    const filterArr = useSelector((state) => state.countryReducer.regionFiler);

    const {
        name, 
        region,
        population,
        subregion,
        capital,
        borders,
        currencies,
        languages,
        tld
    } = country;

    const borderArr = [];

    const extractCountry = (filterCo) => {
        filterCo.forEach((country) => {
            borders.includes(country.fifa) && borderArr.push(country.name.common);
    })};

    if (region.includes(filterText)) {
        extractCountry(filterArr);
    } else {
        const filterCountries = countries.filter((country) => country.region === region);
        extractCountry(filterCountries);
    }

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
                        Top Level Domain: {tld} <br />
                        Currencies: {Object.values(currencies).map(curr => curr.name).join(", ")} <br />
                        Languages: {Object.values(languages).join(", ")} <br />
            </Typography>
            <Box>
                <Typography>Border Countries:</Typography>
                
                    { borderArr.length > 0 && <BorderCountries borderArr={borderArr} />}     
            </Box>
        </Box>
    )
};

Data.propTypes = {
    country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Data;