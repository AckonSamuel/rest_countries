import PropTypes from 'prop-types';
import CountryCard from './CountryCard';

const CountryList = ({ countries, searchText, filteredSearch }) => {
  if (filteredSearch && filteredSearch.length === 0 && searchText.length !== 0) {
    return <h1 className="error-msg">Oops! Search not found</h1>;
  }
  return (
    <section id="country-list">

      { countries && countries.length && countries.map((country) => (
        <CountryCard
          key={country.name.official}
          officialName={country.name.common}
          flagsalt={country.flags.alt}
          flagsvg={country.flags.svg}
          region={country.region}
          capital={country.capital}
          population={country.population}
        />
      ))}
    </section>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  filteredSearch: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default CountryList;
