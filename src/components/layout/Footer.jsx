
import { Box, Container, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0f0f2e 0%, #161641 100%)',
        padding: { xs: 6, md: 8 },
        borderTop: '1px solid rgba(119, 144, 222, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <Typography
            sx={{
              color: '#ededed',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.8,
              marginBottom: 3,
            }}
          >
            We're excited about where we're taking OpenEverest and how it will help users manage data workloads at scale.
          </Typography>
          
          <Typography
            sx={{
              color: '#b8b8d1',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.8,
              marginBottom: 2,
            }}
          >
            Learn more about OpenEverest at{' '}
            <Link
              href="https://openeverest.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#7790de',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#ed6a5a',
                },
              }}
            >
              openeverest.io
            </Link>
          </Typography>

          <Typography
            sx={{
              color: '#b8b8d1',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.8,
            }}
          >
            Want to collaborate or have questions? Feel free to open an issue or pull request at{' '}
            <Link
              href="https://github.com/percona/everest"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#7790de',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#ed6a5a',
                },
              }}
            >
              percona/everest
            </Link>
          </Typography>

          <Box
            sx={{
              marginTop: 6,
              paddingTop: 4,
              borderTop: '1px solid rgba(119, 144, 222, 0.1)',
            }}
          >
            <Typography
              sx={{
                color: 'rgba(184, 184, 209, 0.6)',
                fontSize: '0.875rem',
              }}
            >
              © {new Date().getFullYear()} OpenEverest. Open source database management at scale.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
