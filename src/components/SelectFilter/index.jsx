import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import pxToRem from '../../assets/theme/pxToRem';

const SelectFilter = ({ filterListener, filterContinent }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: 120, marginBottom: pxToRem(48),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto', marginRight: pxToRem(78),  marginTop: pxToRem(48),
    }}}>
      <FormControl sx={{ width: pxToRem(200)}}>
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by Region"
          value={filterContinent}
          onChange={ (e) => filterListener(e.target.value) }
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"America"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

SelectFilter.propTypes = {
  filterListener: PropTypes.func.isRequired,
  filterContinent: PropTypes.string.isRequired,
};

export default SelectFilter;
