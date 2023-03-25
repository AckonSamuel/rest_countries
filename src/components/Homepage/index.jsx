import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import CountryList from '../Card';
import Searchbar from '../Searchbar';

const Homepage = ({ countries, textListener, filteredSearch, searchText}) => {
    return (
        <Container>
            <Stack spacing={2}>
                <Searchbar textListener={textListener} searchText={searchText} />
                <CountryList countries={countries} searchText={searchText} filteredSearch={filteredSearch} />
            </Stack>
        </Container>
    )
};

Homepage.propTypes = {
    films: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    filteredSearch: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    searchText: PropTypes.string.isRequired,
    textListener: PropTypes.func.isRequired,
}
export default Homepage;