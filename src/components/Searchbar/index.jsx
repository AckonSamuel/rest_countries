import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import pxToRem from '../../assets/theme/pxToRem';

const Searchbar = ({ textListener, searchText }) => {
  const theme = useTheme();
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 'inherit',
        marginTop: pxToRem(48),
        marginBottom: pxToRem(48),
        backgroundColor: theme.palette.background.primary,
        [theme.breakpoints.up('lg')]: {
          width: 430,
        },
        [theme.breakpoints.up('sm')]: {
          width: 343,
        },
      }}
    >
      <IconButton
        type="button"
        sx={{
          p: '10px',
          color: theme.palette.background.secondary,
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Country"
        type="search"
        value={searchText}
        inputProps={{
          style: { color: theme.palette.background.secondary },
          'aria-label': 'search country',
          onChange: (e) => textListener(e.target.value),
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
