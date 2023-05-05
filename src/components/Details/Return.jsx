import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Return = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <Box width='100%'>
        <Button onClick={() => goHome()}>
            <ArrowBackIcon />
            Back
        </Button>
    </Box>
    );
}


export default Return;