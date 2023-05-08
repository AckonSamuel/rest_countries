import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import pxToRem from '../../assets/theme/pxToRem';

const SelectFilter = ({ filterListener, filterContinent }) => {
  const theme = useTheme();

  return (
    <Paper sx={{ width: 200, marginBottom: pxToRem(48),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto', marginTop: pxToRem(48),
    }}}>
      <FormControl sx={{ width: pxToRem(200),
      color: theme.palette.text,
      }}>
        <InputLabel id="demo-simple-select-label"
        sx={{ color: theme.palette.text.main,
        }}
        >Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by Region"
          value={filterContinent}
          variant="outlined"
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
    </Paper>
  );
};

SelectFilter.propTypes = {
  filterListener: PropTypes.func.isRequired,
  filterContinent: PropTypes.string.isRequired,
};

export default SelectFilter;
