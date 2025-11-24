
import { createTheme } from '@mui/material'

export const databaseTheme = createTheme({
  palette: {
    primary: {
      main: '#0E5FB5',
    },
    secondary: {
      main: '#62AEFF',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C323E',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 300,
    },
    h2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '0.875rem',
      color: '#666666',
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: '#fafafa',
          color: '#2C323E',
        },
      },
    },
  },
})
