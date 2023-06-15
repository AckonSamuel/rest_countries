import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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
    <Box
      width="100%"
      sx={{
        marginBottom: pxToRem(60),
        marginTop: pxToRem(50),
        [theme.breakpoints.down('lg')]: {
          marginBottom: pxToRem(0),
          marginTop: pxToRem(40),
        },
      }}
    >
      <Paper sx={{
        width: pxToRem(136),
        [theme.breakpoints.down('md')]: {
          width: pxToRem(104),
          height: pxToRem(30),
          fontSize: pxToRem(14),
        },
      }}
      >
        <Button
          variant="returnHome"
          component="button"
          onClick={() => goHome()}
          sx={{
            width: pxToRem(136),
            backgroundColor: theme.palette.background.primary,
            height: pxToRem(40),
            justifyContent: 'space-evenly',
            [theme.breakpoints.down('md')]: {
              width: pxToRem(104),
              height: pxToRem(30),
              fontSize: pxToRem(14),
            },
          }}
        >
          <ArrowBackIcon />
          <Typography
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: pxToRem(14),
              },
            }}
            variant="returnHome"
          >
            Back
          </Typography>
        </Button>
      </Paper>
    </Box>
  );
};

export default Return;
