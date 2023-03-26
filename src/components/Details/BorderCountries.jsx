import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BorderCountries = ({ borderArr }) => (
      <Stack direction="row" spacing={2}>
        { borderArr.map((country) => <Item>{country}</Item> )}
      </Stack>
  );


BorderCountries.propTypes = {
  borderArr: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default BorderCountries;
