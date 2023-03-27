import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Data from './Data';

const Details = ({ countries }) => {
    const { common } = useParams();

    return (
        <Box>
            {
            countries
            .filter((country) => country.name.common === common )
            .map((country) => <Data country={country} />)
            }
        </Box>
    )
};


Details.propTypes = {
    country: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Details;