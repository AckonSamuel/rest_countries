import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import pxToRem from '../../assets/theme/pxToRem';

const StyledContainer = styled(Box)(({ theme }) => ({
  background: 0,
  backgroundColor: theme.palette.background.default,
  paddingLeft: pxToRem(44),
  paddingRight: pxToRem(44),
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: pxToRem(20),
    paddingRight: pxToRem(20),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: pxToRem(30),
    paddingRight: pxToRem(30),
  },
}));

export default StyledContainer;
