import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import pxToRem from '../../assets/theme/pxToRem';

const StyledContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    paddingLeft: pxToRem(60),
    paddingRight: pxToRem(0),
    margin: 0,
    outline: 'solid red',
}));

export default StyledContainer;