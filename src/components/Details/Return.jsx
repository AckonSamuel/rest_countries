import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import pxToRem from '../../assets/theme/pxToRem';

const Return = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Paper width="100%" sx={{ marginBottom: pxToRem(60), marginTop: pxToRem(50) }}>
      <Button
        variant="returnHome"
        component="button"
        onClick={() => goHome()}
        sx={{
          width: pxToRem(136),
          backgroundColor: theme.palette.background.primary,
          height: pxToRem(40),
          justifyContent: 'space-evenly',
        }}
      >
        <ArrowBackIcon />
        <Typography variant="returnHome">Back</Typography>
      </Button>
    </Paper>
  );
};

export default Return;
