
import { Box, Container, Typography } from '@mui/material'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  return (
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
  )
}
