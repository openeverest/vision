import { Box, Container, Typography } from '@mui/material'
import logo from '../../assets/logo.png'
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
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              marginBottom: { xs: 2, sm: 3 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              alt="OpenEverest"
              style={{
                maxWidth: '90%',
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
              marginBottom: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Product Vision
          </Typography>
          <Box
            sx={{
              height: '3px',
              width: { xs: '80px', sm: '100px', md: '120px' },
              background: 'linear-gradient(90deg, #ed6a5a 0%, #7790de 100%)',
              margin: { xs: '0 auto 2rem', sm: '0 auto 3rem', md: '0 auto 4rem' },
            }}
          />
          <TypingAnimation />
        </Box>
      </Container>
    </Box>
  )
}