import PropTypes from 'prop-types';
import CountryList from '../Card';
import Searchbar from '../Searchbar';
import SelectFilter from '../SelectFilter';
import Navbar from '../Navbar';
import StyledContainer from '../StyledContainer';

const Homepage = ({ countries, textListener, filteredSearch, filterContinent, filterListener, searchText }) => {
    return (
        <>
            <Navbar />
            <StyledContainer>
                <Searchbar textListener={textListener} searchText={searchText} />
                <SelectFilter filterListener={filterListener} filterContinent={filterContinent} />
                <CountryList
                    countries={countries}
                    searchText={searchText}
                    filteredSearch={filteredSearch} />
            </StyledContainer>
        </>
    )
};

Homepage.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    filteredSearch: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    searchText: PropTypes.string.isRequired,
    textListener: PropTypes.func.isRequired,
    filterListener: PropTypes.func.isRequired,
    filterContinent: PropTypes.string.isRequired,
};

export default Homepage;