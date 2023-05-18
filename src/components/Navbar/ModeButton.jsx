import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';
import ColorModeContext from '../../context';

const ModeButton = () => {
  const colorMode = useContext(ColorModeContext);
  const { toggleColorMode } = colorMode;
  const theme = useTheme();
  return (
    <Box onClick={toggleColorMode}>
      <Button
        variant="returnHome"
        component="button"
        sx={{
          paddingRight: 0,
          justifyContent: 'flex-end',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.5rem',
          },
          flexShrink: 1,
        }}
      >
        { theme.palette.mode === 'light' ? <IoMoonOutline className="moon" /> : <IoMoonSharp className="moon" /> }
        <Typography
          variant="darkMode"
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '0.8rem',
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.6rem',
            },
            flexShrink: 1,
          }}
        >
          Dark Mode
        </Typography>
      </Button>
    </Box>
  );
};

export default ModeButton;
