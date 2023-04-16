import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CountryList from '../Card';
import Searchbar from '../Searchbar';
import SelectFilter from '../SelectFilter';
import Navbar from '../Navbar';
import StyledContainer from '../StyledContainer';

const Homepage = ({ countries, textListener, filteredSearch, filterContinent, filterListener, searchText }) => {
    console.log(countries)
    return (
        <><Navbar />
        <StyledContainer>
            <Stack spacing={2} sx={{ marginTop: 2 }}>
                <Searchbar textListener={textListener} searchText={searchText} />
                <SelectFilter filterListener={filterListener} filterContinent={filterContinent} />
                <CountryList
                    countries={countries}
                    searchText={searchText}
                    filteredSearch={filteredSearch} />
            </Stack>
        </StyledContainer></>
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