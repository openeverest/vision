
import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState, useRef } from 'react'

export default function CopilotStory({ number, title, description, visual }) {
  const [isVisible, setIsVisible] = useState(false)
  const storyRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (storyRef.current) {
      observer.observe(storyRef.current)
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current)
      }
    }
  }, [])

  return (
    <Box
      ref={storyRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #161641 0%, #1e1e52 100%)',
        padding: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(150px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 6, md: 8 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 4 }}>
                <Box
                  sx={{
                    minWidth: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '2rem',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  {number}
                </Box>
                <Box
                  sx={{
                    height: '2px',
                    flex: 1,
                    background: 'linear-gradient(90deg, #7790de 0%, rgba(119, 144, 222, 0.2) 100%)',
                  }}
                />
              </Box>

              <Typography
                variant="h2"
                sx={{
                  background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 4,
                  fontWeight: 500,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  color: '#ededed',
                  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.8,
                  maxWidth: '600px',
                }}
              >
                {description}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                minHeight: { xs: '300px', md: '500px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {visual}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
