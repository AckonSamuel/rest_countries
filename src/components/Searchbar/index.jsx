import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import pxToRem from '../../assets/theme/pxToRem';

const Searchbar = ({ textListener, searchText }) => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 430, marginTop: pxToRem(48), marginBottom: pxToRem(48), }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Country"
        type="search"
        value={searchText}
        inputProps={{ 
            'aria-label': 'search country',
            onChange: (e) => textListener(e.target.value)
     }}
      />
    </Paper>
  );
};

Searchbar.propTypes = {
    textListener: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
};

export default Searchbar;