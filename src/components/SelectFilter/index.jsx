import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectFilter = ({ filterListener, filterContinent }) => {
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
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
