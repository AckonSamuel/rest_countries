import PropTypes from 'prop-types';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => 
<section id="country-list">
    { countries.map(country => (
        <CountryCard
        key={country.name.official}
        officialName={country.name.official}
        flagsalt={country.flags.alt}
        flagsvg={country.flags.svg}
        region={country.region}
        capital={country.capital}
        population={country.population}
        />
    ))}
</section>;

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default CountryList;