import  createTheme from '@mui/material/styles/createTheme';

const smartLensBlue = '#2B2E7D';
const secondaryMain = '#2E3CDE';
const smartLensWhite = '#F8FAFC';
const listItemHover = 'linear-gradient(90deg, #AEB4FF 5%, #000863 5%)';

export default createTheme({
    palette: {
        common: {
            blue: smartLensBlue,
            white: smartLensWhite
        },
        primary: {
            main: smartLensBlue,
        },
        secondary: {
            main: secondaryMain
        },
    },
    typography: {
        fontFamily: 'Poppins',
        h5: {
            fontSize: '36px',
            fontWeight: 600
        },
        h9: {
            fontSize: '21px',
            fontWeight: 600
        },
        h10: {
            fontSize: '15px',
            fontWeight: 600
        }
        
    },
    components: {
        MuiTextField: {
            defaultProps: {
                color: 'secondary',
            }
        },
        MuiLink: {
            defaultProps: {
                color: 'secondary',
            },
        },
        MuiListItem: {
            styleOverrides: {
                button: {
                    ":hover":{
                        background: listItemHover
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderStyle: 'none',
                },
                root: {
                    borderRadius: '16px',
                    background: '#F1F5F9',
                    marginRight: '50px'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': { 
                        background: '#EDEFFF' 
                    },
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    background: '#F8FAFC',
                    borderRadius: 30
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: 'none',
                }
            }
        }
    },
})