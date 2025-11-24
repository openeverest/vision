import { ThemeProvider, createTheme, Box, Container, Typography } from '@mui/material'

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #161641 0%, #1e1e52 100%)',
          padding: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #7790de 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 3,
                fontWeight: 300,
                letterSpacing: '0.08em',
              }}
            >
              OpenEverest
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#7790de',
                fontWeight: 300,
                letterSpacing: '0.04em',
                marginBottom: 4,
                fontSize: '2.5rem',
              }}
            >
              Product Vision
            </Typography>
            <Box
              sx={{
                height: '3px',
                width: '120px',
                background: 'linear-gradient(90deg, #ed6a5a 0%, #7790de 100%)',
                margin: '0 auto 4rem',
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: '#ededed',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: '1.1rem',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Open Source Database Platform - run databases anywhere. 
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
