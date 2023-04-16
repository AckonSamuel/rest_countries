import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,

}));

export default StyledContainer;