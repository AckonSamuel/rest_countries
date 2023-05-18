import PropTypes from 'prop-types';
import CountryList from '../Card';
import Searchbar from '../Searchbar';
import SelectFilter from '../SelectFilter';
import Navbar from '../Navbar';
import StyledContainer from '../StyledContainer';

const Homepage = ({
  countries, textListener, filteredSearch, filterContinent, filterListener, searchText,
}) => (
  <>
    <Navbar />
    <StyledContainer>
      <Searchbar textListener={textListener} searchText={searchText} />
      <SelectFilter filterListener={filterListener} filterContinent={filterContinent} />
      <CountryList
        countries={countries}
        searchText={searchText}
        filteredSearch={filteredSearch}
      />
    </StyledContainer>
  </>
);

Homepage.defaultProps = {
  countries: [],
  filteredSearch: [],
  searchText: '',
  filterContinent: '',
  textListener: () => {},
  filterListener: () => {},
};

Homepage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  filteredSearch: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  searchText: PropTypes.string,
  textListener: PropTypes.func,
  filterListener: PropTypes.func,
  filterContinent: PropTypes.string,
};

export default Homepage;
