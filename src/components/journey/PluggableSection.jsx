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
      title: "The Lock-In Challenge",
      description: "Right now OpenEverest is locking users in. Only three database offerings - MySQL, PostgreSQL and MongoDB. All three are using Percona Operators. To monitor the databases users must use Percona Monitoring and Management.",
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
            src={everest3dbs}
            alt="Current Everest - Three Databases"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
              display: 'block',
              borderRadius: '16px',
            }}
          />
        </Box>
      )
    },
    {
      number: 2,
      title: "The Pluggable Vision",
      description: "It seems a good idea to add more databases or integrations, but it is quite complex process right now. We will turn OpenEverest into a pluggable core, where database, storage and other technologies are a plugin. We will see ClickHouse, Vitess, DocumentDB, Valkey, integration with Prometheus and other technologies coming soon.",
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