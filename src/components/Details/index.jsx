import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import Data from './Data';
import Return from './Return';
import Navbar from '../Navbar';
import StyledContainer from '../StyledContainer';
import pxToRem from '../../assets/theme/pxToRem';

const Details = ({ countries }) => {
  const { common } = useParams();

  const theme = useTheme();

  return (
    <>
      <Navbar />
      <StyledContainer>
        <Return />
        {countries
          .filter((country) => country.name.common === common)
          .map((country) => (
            <Grid
              container
              key={common}
              columnGap={pxToRem(120)}
              sx={{
                flex: '0, 0, 100%', margin: '0 0 10rem 0', padding: 0, boxSizing: 'border-box',
              }}
            >
              <Grid
                item
                xs={12}
                lg={5}
                sx={{
                  [theme.breakpoints.down('lg')]: {
                    marginBottom: pxToRem(44),
                    marginTop: pxToRem(64),
                  },
                }}
              >
                <Image
                  src={country.flags.svg}
                  minwidth={pxToRem(560)}
                  fit="fill"
                  sx={{ aspectRaio: '16/22' }}
                />
              </Grid>
              <Grid item xs={12} lg={5}>
                <Data
                  country={country}
                  countries={countries}
                  maxWidth={pxToRem(600)}
                  maxHeight={pxToRem(320)}
                />
              </Grid>
            </Grid>
          ))}
      </StyledContainer>
    </>
  );
};

Details.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Details;
