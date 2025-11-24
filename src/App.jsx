import { ThemeProvider, createTheme, Box, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

function TypingAnimation() {
  const phrases = ['pluggable', 'truly anywhere', 'a copilot']
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting && displayText === currentPhrase) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, currentPhraseIndex])

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: '0 auto',
        fontSize: '1.1rem',
        fontWeight: 300,
        lineHeight: 1.8,
        minHeight: '60px',
      }}
    >
      <Typography
        component="span"
        sx={{
          color: '#ededed',
          fontSize: '1.1rem',
          fontWeight: 300,
        }}
      >
        OpenEverest is{' '}
      </Typography>
      <Typography
        component="span"
        sx={{
          color: '#7790de',
          fontSize: '1.1rem',
          fontWeight: 400,
          background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {displayText}
        <Box
          component="span"
          sx={{
            borderRight: '2px solid #7790de',
            animation: 'blink 1s step-end infinite',
            '@keyframes blink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 },
            },
          }}
        >
          &nbsp;
        </Box>
      </Typography>
    </Box>
  )
}

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
            <Box
              sx={{
                marginBottom: 3,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="/src/assets/logo.png"
                alt="OpenEverest"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '150px',
                }}
              />
            </Box>
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
            <TypingAnimation />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
