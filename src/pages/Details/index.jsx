import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import Data from '../../components/DetailsData';
import Return from '../../components/Return';
import Navbar from '../../components/Navbar';
import StyledContainer from '../../components/StyledContainer';
import pxToRem from '../../assets/theme/pxToRem';

const Details = () => {
  const { common } = useParams();

  const countries = useSelector((state) => state.countryReducer.countries, shallowEqual);

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

export default Details;
