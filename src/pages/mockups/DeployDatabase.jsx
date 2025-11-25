
import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Tooltip,
} from '@mui/material'
import { everestTheme } from '../../theme/everestTheme'
import {
  Help as HelpIcon,
  PersonOutline as PersonOutlineIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
  Storage as StorageIcon,
  Settings as SettingsIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon,
  Lock as LockIcon,
} from '@mui/icons-material'

const DRAWER_WIDTH = 72

const deploymentTargets = [
  {
    name: 'AWS RDS',
    description: 'Amazon Relational Database Service',
    logo: '/src/assets/logos/aws-rds.png',
    available: true,
    provider: 'AWS',
  },
  {
    name: 'AWS Aurora',
    description: 'Amazon Aurora PostgreSQL',
    logo: '/src/assets/logos/aws-aurora.png',
    available: true,
    provider: 'AWS',
  },
  {
    name: 'Cloud SQL for PostgreSQL',
    description: 'Google Cloud managed PostgreSQL',
    logo: '/src/assets/logos/cloudsql.png',
    available: true,
    provider: 'Google Cloud',
  },
  {
    name: 'Neon',
    description: 'Serverless PostgreSQL',
    logo: '/src/assets/logos/neon.jpeg',
    available: false,
    provider: 'Neon',
    pluginRequired: true,
  },
  {
    name: 'Kubernetes',
    description: 'Self-managed on Kubernetes',
    logo: '/src/assets/logos/kubernetes.png',
    available: true,
    provider: 'Kubernetes',
  },
]

export default function DeployDatabase() {
  const [selectedTarget, setSelectedTarget] = useState(null)

  return (
    <ThemeProvider theme={everestTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#fafafa', fontFamily: 'Roboto, sans-serif' }}>
        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{
            bgcolor: '#fff',
            color: '#2C323E',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            {/* Everest Logo */}
            <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <svg width="160" height="40" viewBox="0 0 337 128" fill="none">
                <rect width="128" height="128" rx="19.2" fill="url(#paint0_radial)" />
                <path d="M63.9742 24L44.9306 56.9806H51.3673L63.9742 35.1474L95.8931 90.4258H32.0554L48.1486 62.5548H41.7119L38.4933 68.129H44.9298L41.7112 73.7032H35.2746L22.4 96H105.548L99.1111 84.8516H92.6746L89.4559 79.2774H95.8925L63.9742 24Z" fill="white" />
                <defs>
                  <radialGradient id="paint0_radial">
                    <stop offset="0.333333" stopColor="#0E5FB5" />
                    <stop offset="1" stopColor="#62AEFF" />
                  </radialGradient>
                </defs>
              </svg>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Help and User Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit">
                <HelpIcon />
              </IconButton>
              <IconButton color="inherit">
                <PersonOutlineIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              bgcolor: '#fff',
              borderRight: '1px solid #e0e0e0',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ p: 1 }}>
            <IconButton sx={{ width: '100%' }}>
              <KeyboardDoubleArrowRightIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1, gap: 1 }}>
            <IconButton
              sx={{
                bgcolor: '#0E5FB5',
                color: '#fff',
                '&:hover': { bgcolor: '#0d54a3' },
              }}
            >
              <StorageIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${DRAWER_WIDTH}px)` }}>
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4 }}>
            {/* Back Button */}
            <Button
              startIcon={<ArrowBackIcon />}
              sx={{ mb: 3, color: '#666' }}
              onClick={() => window.history.back()}
            >
              Back to databases
            </Button>

            {/* Header */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f5f5f5',
                    borderRadius: 2,
                  }}
                >
                  <img 
                    src="/src/assets/logos/postgresql.png" 
                    alt="PostgreSQL"
                    style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'contain' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 500, color: '#2C323E' }}>
                    Deploy PostgreSQL
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
                    Choose where you want to deploy your PostgreSQL database
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Deployment Targets */}
            <Grid container spacing={3}>
              {deploymentTargets.map((target, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Tooltip 
                    title={target.pluginRequired ? "Install plugin to enable" : ""} 
                    placement="top"
                    arrow
                  >
                    <Card
                      sx={{
                        cursor: target.available ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s',
                        border: selectedTarget === target.name ? '2px solid #0E5FB5' : '1px solid #e0e0e0',
                        opacity: target.available ? 1 : 0.5,
                        position: 'relative',
                        '&:hover': target.available ? {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 4px 12px rgba(14, 95, 181, 0.15)',
                          borderColor: '#0E5FB5',
                        } : {
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                      onClick={() => {
                        if (target.available) {
                          setSelectedTarget(target.name)
                        }
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        {/* Provider Badge */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Chip
                            label={target.provider}
                            size="small"
                            sx={{
                              bgcolor: '#e3f2fd',
                              color: '#1976d2',
                              fontSize: '0.75rem',
                              height: '20px',
                            }}
                          />
                          {target.pluginRequired && (
                            <LockIcon sx={{ color: '#999', fontSize: 20 }} />
                          )}
                          {selectedTarget === target.name && (
                            <CheckCircleIcon sx={{ color: '#0E5FB5', fontSize: 24 }} />
                          )}
                        </Box>

                        {/* Logo */}
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            margin: '0 auto 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#f5f5f5',
                            borderRadius: 2,
                          }}
                        >
                          <img 
                            src={target.logo} 
                            alt={target.name}
                            style={{ maxWidth: '45px', maxHeight: '45px', objectFit: 'contain' }}
                          />
                        </Box>

                        {/* Name and Description */}
                        <Typography variant="h6" sx={{ fontWeight: 500, color: '#2C323E', mb: 1, textAlign: 'center' }}>
                          {target.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', minHeight: '40px' }}>
                          {target.description}
                        </Typography>

                        {/* Plugin Required Message */}
                        {target.pluginRequired && (
                          <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Typography variant="caption" sx={{ color: '#ed6a5a', fontWeight: 500 }}>
                              Plugin required
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>

            {/* Next Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                disabled={!selectedTarget}
                sx={{
                  bgcolor: '#0E5FB5',
                  '&:hover': { bgcolor: '#0d54a3' },
                  '&:disabled': {
                    bgcolor: '#ccc',
                    color: '#999',
                  },
                }}
              >
                Next: Configure
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
