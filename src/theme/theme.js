
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
      fontSize: '4rem',
      lineHeight: 1.1,
      color: '#ffffff',
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '2rem',
      color: '#ededed',
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.125rem',
      color: '#ededed',
      lineHeight: 1.6,
    },
  },
})
