import { createTheme } from '@mui/material/styles';
import colors from "./colors";
import typography from './typography';

export default createTheme({
    palette: { ...colors},
    typography: {...typography},
});