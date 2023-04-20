import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import CountryCard from './CountryCard';
import pxToRem from '../../assets/theme/pxToRem';

const CountryList = ({ countries, searchText, filteredSearch }) => {
    if (filteredSearch && filteredSearch.length === 0 && searchText.length !== 0) {
        return <h1>Oops! Search not found</h1>;
    }
    return (
<section id="country-list">
    <Grid container rowSpacing={pxToRem(30)}
    columnSpacing={pxToRem(90)}
    justifyItems="space-between"
    sx={{ width: '100%' }}>
    
    { countries && countries.length && countries.map(country => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CountryCard
        key={country.name.official}
        officialName={country.name.common}
        flagsalt={country.flags.alt}
        flagsvg={country.flags.svg}
        region={country.region}
        capital={country.capital}
        population={country.population}
        />
        </Grid>
    ))}
    </Grid>
</section>)}

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    filteredSearch: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    searchText: PropTypes.string.isRequired,
};

export default CountryList;