import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { styled } from '@mui/material/styles';
import ModeButton from './ModeButton';

const Item = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

  color: theme.palette.text.secondary,
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <ModeButton />
        </Toolbar>
      </Item>
    </Box>
  );
}

export default Navbar;