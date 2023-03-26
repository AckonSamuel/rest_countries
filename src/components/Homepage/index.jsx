import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import CountryList from '../Card';
import Searchbar from '../Searchbar';
import SelectFilter from '../SelectFilter';

const Homepage = ({ countries, textListener, filteredSearch, filterContinent, filterListener, searchText }) => {
    return (
        <Container>
            <Stack spacing={2}>
                <Searchbar textListener={textListener} searchText={searchText} />
                <SelectFilter filterListener={filterListener} filterContinent={filterContinent} />
                <CountryList 
                countries={countries} 
                searchText={searchText}
                filteredSearch={filteredSearch} />
            </Stack>
        </Container>
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