import { createTheme } from '@mui/material/styles';
import colors from "./colors";
import typography from './typography';

export default createTheme({
    palette: { ...colors},
    typography: {...typography},
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: colors.text.main,
                    "&.Mui-focused": {
                        color: colors.text.main,
                      },                
                }
            }
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'none',
                }
            }
        },
        
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.background.primary,
                      },
                    },
                  },
              
                notchedOutline: {
                    borderColor: colors.background.primary,
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    background: 'none',
                },
            },
        },

        MuiMenu: {
            styleOverrides: {
                paper: {
                    background: 'none',
                    backgroundColor: colors.background.primary,
                },
            },
        },

        MuiMenuItem: {
            styleOverrides: {
                background: 'none',
                backgroundColor: colors.background.primary,
            },
        },

        MuiSelect: {
            styleOverrides: {
                select: {
                    background: 'none',
                    backgroundColor: colors.background.primary,
                },

                selectMenu: {
                    background: 'none',
                    backgroundColor: colors.background.primary,
                },
            },
        },
    },
});