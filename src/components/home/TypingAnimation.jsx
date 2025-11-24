
import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function TypingAnimation() {
  const phrases = ['pluggable', 'truly anywhere', 'an AI copilot']
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
        maxWidth: '900px',
        margin: '0 auto',
        fontWeight: 300,
        lineHeight: 1.8,
        minHeight: { xs: '120px', sm: '80px', md: '60px' },
        padding: { xs: '0 1rem', sm: '0 2rem', md: 0 },
      }}
    >
      <Typography
        component="span"
        sx={{
          color: '#ededed',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
          fontWeight: 300,
          display: 'inline-block',
        }}
      >
        OpenEverest is{' '}
      </Typography>
      <Typography
        component="span"
        sx={{
          color: '#7790de',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
          fontWeight: 400,
          background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
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
