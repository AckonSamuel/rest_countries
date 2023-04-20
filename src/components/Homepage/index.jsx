import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CountryList from '../Card';
import Searchbar from '../Searchbar';
import SelectFilter from '../SelectFilter';
import Navbar from '../Navbar';
import StyledContainer from '../StyledContainer';
import pxToRem from '../../assets/theme/pxToRem';

const Homepage = ({ countries, textListener, filteredSearch, filterContinent, filterListener, searchText }) => {

    return (
        <>
            <Navbar />
            <StyledContainer>
                <Box sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                }}>
                <Searchbar textListener={textListener} searchText={searchText} />
                <SelectFilter filterListener={filterListener} filterContinent={filterContinent} />
                </Box>
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