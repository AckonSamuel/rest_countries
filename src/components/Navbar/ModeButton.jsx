import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoMoonOutline } from 'react-icons/io5';
import ColorModeContext from '../../context';
import pxToRem from '../../assets/theme/pxToRem';

const ModeButton = () => {
  const colorMode = useContext(ColorModeContext);
  const { toggleColorMode } = colorMode;
  return (
    <Box onClick={toggleColorMode}>
      <Button variant="returnHome" component="button" sx={{ width: pxToRem(155), height: pxToRem(40), justifyContent: 'space-between' }}>
        <IoMoonOutline className="moon" />
        <Typography variant="darkMode">Dark Mode</Typography>
      </Button>
    </Box>
  );
};

export default ModeButton;
