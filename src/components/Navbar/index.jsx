import { useTheme, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ModeButton from './ModeButton';
import pxToRem from '../../assets/theme/pxToRem';

const Item = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  color: theme.palette.text.main,
  boxShadow: theme.palette.shadow,
  paddingLeft: pxToRem(20),
  paddingRight: pxToRem(20),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: pxToRem(5),
    paddingRight: pxToRem(5),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: pxToRem(36),
    paddingRight: pxToRem(36),
  },
}));

const Navbar = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ flexGrow: 1, width: '100%' }}>
      <Item position="static">
        <Toolbar sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >
          <Typography
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
              },
              flexShrink: 1,
            }}
            variant="logo"
            component="h1"
          >
            Where in the world?
          </Typography>
          <ModeButton />
        </Toolbar>
      </Item>
    </Paper>
  );
};

export default Navbar;
