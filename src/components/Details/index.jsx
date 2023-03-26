import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Data from './Data';

const Details = ({ country }) => {
    return (
        <Box>
            <Data country={country} />
        </Box>
    )
};


Details.propTypes = {
    country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;