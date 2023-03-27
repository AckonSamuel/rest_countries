import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Data from './Data';
import Return from './Return';

const Details = ({ countries }) => {
    const { common } = useParams();

    return (
        <Box>
            <Return />
            {
            countries
            .filter((country) => country.name.common === common )
            .map((country) => <Data country={country} countries={countries} />)
            }
        </Box>
    )
};


Details.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Details;