import { useState } from 'react'
import { Box, Container, Typography, Dialog, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import CopilotStory from './CopilotStory'
import AICopilot from '../../pages/mockups/AICopilot'

export default function CopilotSection({ sectionRef }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const stories = [
    {
      number: 1,
      title: "Your AI Database Administrator",
      description: (
        <>
          Database administration is complex and expensive. Companies either hire dedicated DBAs or pay for external consulting services. 
          What if an AI copilot could troubleshoot issues, suggest optimizations, and handle routine maintenance tasks? 
          With OpenEverest's self-hosted solution, your data never leaves your infrastructure - the AI works locally, keeping your sensitive information secure.
        </>
      ),
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: 'rgba(119, 144, 222, 0.05)',
            border: '2px dashed rgba(119, 144, 222, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            gap: 3,
          }}
        >
          <Typography
            sx={{
              color: '#ededed',
              fontSize: '1.25rem',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            AI-Powered DBA Tasks
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Issue Detection', 'Root Cause Analysis', 'Auto-remediation', 'Security Audits', 'Backup Strategy', 'Schema Evolution'].map((task) => (
              <Box
                key={task}
                sx={{
                  padding: '8px 16px',
                  background: 'rgba(119, 144, 222, 0.1)',
                  border: '1px solid rgba(119, 144, 222, 0.3)',
                  borderRadius: '8px',
                  color: '#7790de',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                {task}
              </Box>
            ))}
          </Box>
        </Box>
      ),
      showButton: true
    },
    {
      number: 2,
      title: "Performance Without the Pain",
      description: (
        <>
          Performance bottlenecks are inevitable. Query optimization, index tuning, resource allocation - these tasks require deep expertise and constant monitoring. 
          OpenEverest's AI copilot continuously analyzes your workload, identifies bottlenecks, and recommends precise optimizations. 
          All processing happens on your infrastructure, so performance metrics and query patterns stay private.
        </>
      ),
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: 'rgba(237, 106, 90, 0.05)',
            border: '2px dashed rgba(237, 106, 90, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            gap: 3,
          }}
        >
          <Typography
            sx={{
              color: '#ededed',
              fontSize: '1.25rem',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Intelligent Optimization
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Query Analysis', 'Index Suggestions', 'Resource Tuning', 'Connection Pooling', 'Cache Strategy', 'Workload Balancing'].map((feature) => (
              <Box
                key={feature}
                sx={{
                  padding: '8px 16px',
                  background: 'rgba(237, 106, 90, 0.1)',
                  border: '1px solid rgba(237, 106, 90, 0.3)',
                  borderRadius: '8px',
                  color: '#ed6a5a',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                {feature}
              </Box>
            ))}
          </Box>
        </Box>
      )
    },
    {
      number: 3,
      title: "Talk to Your Data",
      description: (
        <>
          Why write complex SQL queries when you can simply ask questions? "Which products had the highest revenue growth last quarter?" 
          "Show me customer retention trends by region." OpenEverest's AI copilot understands natural language and generates insights instantly. 
          Since everything runs on your self-hosted infrastructure, your business intelligence and customer data never leave your control.
        </>
      ),
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: 'rgba(119, 144, 222, 0.05)',
            border: '2px dashed rgba(119, 144, 222, 0.3)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            gap: 3,
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
            Natural Language to Insights
          </Typography>
          <Box sx={{ width: '100%', maxWidth: '400px' }}>
            {['Customer behavior patterns?', 'Revenue by product line?', 'Performance anomalies?'].map((question, idx) => (
              <Box
                key={idx}
                sx={{
                  padding: '12px 16px',
                  background: 'rgba(119, 144, 222, 0.1)',
                  border: '1px solid rgba(119, 144, 222, 0.3)',
                  borderRadius: '8px',
                  color: '#ededed',
                  fontSize: '0.875rem',
                  marginBottom: 2,
                  fontStyle: 'italic',
                }}
              >
                "{question}"
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
      id="copilot"
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
            An AI Copilot
          </Typography>
          <Typography
            sx={{
              color: '#ededed',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
            }}
          >
            Let AI be your database expert. From optimization to troubleshooting, OpenEverest's AI copilot helps you make smarter decisions and move faster - all while keeping your data secure on your infrastructure.
          </Typography>
        </Box>

        <Box sx={{ marginTop: { xs: 6, md: 8 } }}>
          {stories.map((story) => (
            <CopilotStory
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
      </Container>

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
            maxHeight: 'none',
            m: 0,
            position: 'relative',
          }
        }}
      >
        <IconButton
          onClick={() => setDialogOpen(false)}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            zIndex: 1,
            bgcolor: 'white',
            '&:hover': { bgcolor: '#f5f5f5' },
          }}
        >
          <CloseIcon />
        </IconButton>
        <AICopilot />
      </Dialog>
    </Box>
  )
}