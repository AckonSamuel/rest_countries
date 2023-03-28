import { useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { ColorModeContext } from '../../App';

const ModeButton = () =>  {
    const colorMode = useContext(ColorModeContext);
    return (
    <Box onClick={colorMode.toggleColorMode}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ transform: 'rotate(140deg)', marginRight: -2 }}
          >
            <Brightness3Icon />
          </IconButton>
          <Typography color="inherit">Dark Mode</Typography>
    </Box> );
};

export default ModeButton;