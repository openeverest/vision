
import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState, useRef } from 'react'

export default function PluggableStory({ number, title, description, index }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const storyRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!storyRef.current) return

      const rect = storyRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the story is visible
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate transform based on scroll progress
  const translateX = (1 - scrollProgress) * 100

  return (
    <Box
      ref={storyRef}
      sx={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 10 + index,
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #161641 0%, #1e1e52 100%)',
          position: 'relative',
          overflow: 'hidden',
          transform: `translateX(${translateX}%)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 6, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Content Side */}
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

            {/* Visual Side - Placeholder for future visuals */}
            <Box
              sx={{
                flex: 1,
                minHeight: { xs: '300px', md: '500px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(119, 144, 222, 0.05)',
                border: '2px dashed rgba(119, 144, 222, 0.3)',
                borderRadius: '16px',
                position: 'relative',
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(119, 144, 222, 0.5)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                Visual Placeholder
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
