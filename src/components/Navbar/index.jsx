import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ModeButton from './ModeButton';
import pxToRem from '../../assets/theme/pxToRem';

const Item = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.main,
  boxShadow: theme.palette.shadow.secondary,
  paddingLeft: pxToRem(40),
  paddingRight: pxToRem(40),
}));

const Navbar = () => (
  <Paper sx={{ flexGrow: 1, width: '100%' }}>
    <Item position="static">
      <Toolbar>
        <Typography variant="logo" component="div" sx={{ flexGrow: 1 }}>
          Where in the world?
        </Typography>
        <ModeButton />
      </Toolbar>
    </Item>
  </Paper>
);

export default Navbar;
