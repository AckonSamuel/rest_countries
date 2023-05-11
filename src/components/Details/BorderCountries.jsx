import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  ...theme.typography.borderCountries,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginRight: '1rem',
  marginBottom: '1rem',
  color: theme.palette.text.secondary,
}));

const BorderCountries = ({ borderArr }) => {
  const navigate = useNavigate();

  const goTo = (sm) => {
    navigate(sm);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-betweem' }}>
      { borderArr.map((country) => (
        <Item
          key={country}
          onClick={() => goTo(`/details/${country}`)}
          sx={{ cursor: 'pointer' }}
        >
          {country}
        </Item>
      ))}
    </Box>
  );
};

BorderCountries.propTypes = {
  borderArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default BorderCountries;
