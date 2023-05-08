import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { IoMoonOutline } from 'react-icons/io5';
import { ColorModeContext } from '../../App';
import pxToRem from '../../assets/theme/pxToRem';

const ModeButton = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box onClick={colorMode.toggleColorMode}>
      <Button variant="returnHome" component="button" sx={{ width: pxToRem(155), height: pxToRem(40), justifyContent: 'space-between' }}>
        <IoMoonOutline className="moon" />
        <Typography variant="darkMode">Dark Mode</Typography>
      </Button>
    </Box>
  );
};

export default ModeButton;
