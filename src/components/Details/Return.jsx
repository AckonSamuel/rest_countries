import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pxToRem from '../../assets/theme/pxToRem';

const Return = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <Box width='100%' sx={{ marginBottom: pxToRem(60),  marginTop: pxToRem(50),}}>
        <Button onClick={() => goHome()} sx={{ width: pxToRem(136), height: pxToRem(40), justifyContent: 'space-evenly'}}>
            <ArrowBackIcon />
            Back
        </Button>
    </Box>
    );
}


export default Return;