
import { Box, Container, Typography } from '@mui/material'
import { forwardRef } from 'react'

const JourneySection = forwardRef(({ id, title, description, visual, children }, ref) => {
  return (
    <Box
      ref={ref}
      id={id}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #161641 0%, #1e1e52 100%)',
        padding: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 3,
                fontWeight: 500,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: '#ededed',
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                lineHeight: 1.8,
                marginBottom: 2,
              }}
            >
              {description}
            </Typography>
            {children}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: '200px', md: '400px' },
            }}
          >
            {visual}
          </Box>
        </Box>
      </Container>
    </Box>
  )
})

JourneySection.displayName = 'JourneySection'

export default JourneySection
