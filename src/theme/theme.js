
import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7790de',
    },
    secondary: {
      main: '#ed6a5a',
    },
    background: {
      default: '#161641',
      paper: '#161641',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ededed',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 300,
      letterSpacing: '0.05em',
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      lineHeight: 1.1,
      color: '#ffffff',
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      color: '#ededed',
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
      color: '#ededed',
      lineHeight: 1.6,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
