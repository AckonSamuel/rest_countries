import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Image from 'mui-image';
import Data from './Data';
import Return from './Return';
import Navbar from './../Navbar';
import StyledContainer from './../Homepage';

const Details = ({ countries }) => {
    const { common } = useParams();

    return (
        <>
        <Navbar />
        <StyledContainer>
            <Return />
            {countries
                .filter((country) => country.name.common === common)
                .map((country) => <Container key={common}>
                    <Stack direction="row">
                        <Image src={country.flags.svg} />
                        <Data country={country} countries={countries} />
                    </Stack>
                </Container>
                )}
        </StyledContainer>
        </>
    )
};


Details.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Details;