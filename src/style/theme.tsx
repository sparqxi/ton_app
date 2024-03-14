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
});