import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'mui-image';
import Data from './Data';
import Return from './Return';

const Details = ({ countries }) => {
    const { common } = useParams();

    return (
        <Container>
            <Return />
            {
            countries
            .filter((country) => country.name.common === common )
            .map((country) => <Container>
                <Stack direction="row">
                <Image src={country.flags.svg} />
                <Data country={country} countries={countries} />
                </Stack>
            </Container>
            )
            }
        </Container>
    )
};


Details.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Details;