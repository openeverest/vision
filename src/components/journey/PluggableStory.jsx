
import { Box, Typography } from '@mui/material'
import { useEffect, useState, useRef } from 'react'

export default function PluggableStory({ number, title, description, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const storyRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
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
  }, [delay])

  return (
    <Box
      ref={storyRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        marginBottom: 4,
      }}
    >
      <Box
        sx={{
          background: 'rgba(119, 144, 222, 0.05)',
          border: '1px solid rgba(119, 144, 222, 0.2)',
          borderRadius: '12px',
          padding: { xs: 2, sm: 3 },
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            background: 'rgba(119, 144, 222, 0.08)',
            borderColor: 'rgba(119, 144, 222, 0.3)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(180deg, #7790de 0%, #ed6a5a 100%)',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Box
            sx={{
              minWidth: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '1.25rem',
              color: '#ffffff',
              flexShrink: 0,
            }}
          >
            {number}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#7790de',
                fontWeight: 500,
                marginBottom: 1,
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: '#ededed',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                lineHeight: 1.7,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
