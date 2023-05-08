import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import pxToRem from '../../assets/theme/pxToRem';

const StyledContainer = styled(Box)(({ theme }) => ({
  background: 0,
  backgroundColor: theme.palette.background.default,
  paddingLeft: pxToRem(60),
  paddingRight: pxToRem(60),
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

export default StyledContainer;
