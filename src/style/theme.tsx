import { ThemeOptions, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5754E1',
    },
    secondary: {
      main: '#38D7A8',
      contrastText: 'rgba(249,249,249,0.87)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        //   border: 0,
          borderRadius: 20,
          textTransform:'capitalize',
          fontWeight:400,
          fontSize:'16px',

        //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // //   color: 'white',
          height: 42,
          padding: '0 40px',
        },
      },
    },
  },
});