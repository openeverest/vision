import { useState } from 'react'
import { Box, Container, Typography, Dialog, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import PluggableStory from './PluggableStory'
import MultiDatabase from '../../pages/mockups/MultiDatabase'
import everest3dbs from '../../assets/everest-3dbs-min.png'
import multidbScroll from '../../assets/multidb-scroll.gif'

export default function PluggableSection({ sectionRef }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const stories = [
    {
      number: 1,
      title: "The Pluggable Vision",
      description: "We're turning OpenEverest into a pluggable core, where databases, storage, and other technologies are plugins. We will see ClickHouse, Vitess, DocumentDB, Valkey, integration with Prometheus and other technologies coming soon.",
      visual: (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={multidbScroll}
            alt="Multi-Database Vision"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              display: 'block',
              borderRadius: '16px',
            }}
          />
        </Box>
      ),
      showButton: true
    },
    {
      number: 2,
      title: "Everything is a Plugin",
      description: "Want to integrate with your favorite monitoring tool? It's a plugin. Need to sync data between database clusters of different vendors? Plugin. Custom backup solutions? Plugin. The plugin architecture means you're never locked into a single vendor's ecosystem - mix and match the tools that work best for your needs.",
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            padding: 4,
          }}
        >
          <Typography
            sx={{
              color: '#ededed',
              fontSize: '1.25rem',
              fontWeight: 500,
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            Plugin Ecosystem
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', maxWidth: '600px' }}>
            {[
              { label: 'Monitoring', icon: '📊' },
              { label: 'Data Sync', icon: '🔄' },
              { label: 'Backups', icon: '💾' },
              { label: 'Security', icon: '🔒' },
              { label: 'Analytics', icon: '📈' },
              { label: 'Automation', icon: '⚙️' },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  background: 'rgba(119, 144, 222, 0.1)',
                  border: '2px solid rgba(119, 144, 222, 0.3)',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  minWidth: '120px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(119, 144, 222, 0.2)',
                    borderColor: 'rgba(119, 144, 222, 0.5)',
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <Box sx={{ fontSize: '2rem' }}>{item.icon}</Box>
                <Typography
                  sx={{
                    color: '#ededed',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )
    }
  ]

  return (
    <Box
      ref={sectionRef}
      id="pluggable"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #161641 0%, #1e1e52 100%)',
        padding: { xs: 4, sm: 6, md: 8 },
        paddingTop: { xs: 8, sm: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: { xs: 4, md: 6 } }}>
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
            Pluggable
          </Typography>
          <Typography
            sx={{
              color: '#ededed',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
            }}
          >
            OpenEverest is designed with modularity at its core. Mix and match database engines, storage backends, and deployment strategies to create the perfect solution for your needs.
          </Typography>
        </Box>

        <Box sx={{ marginTop: { xs: 6, md: 8 } }}>
          {stories.map((story) => (
            <PluggableStory
              key={story.number}
              number={story.number}
              title={story.title}
              description={story.description}
              visual={story.visual}
              showButton={story.showButton}
              onButtonClick={() => setDialogOpen(true)}
            />
          ))}
        </Box>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth={false}
          fullWidth
          PaperProps={{
            sx: {
              width: '95vw',
              height: '95vh',
              maxWidth: 'none',
              margin: 0,
              position: 'relative',
            }
          }}
          sx={{
            '& .MuiDialog-container': {
              alignItems: 'center',
              justifyContent: 'center',
            }
          }}
        >
          <IconButton
            onClick={() => setDialogOpen(false)}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              zIndex: 10000,
              bgcolor: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: '#f5f5f5',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ height: '100%', overflow: 'auto', pt: 1 }}>
            <MultiDatabase />
          </Box>
        </Dialog>
      </Container>
    </Box>
  )
}