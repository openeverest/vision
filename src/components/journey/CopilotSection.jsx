
import { Box, Typography } from '@mui/material'
import JourneySection from './JourneySection'

export default function CopilotSection({ sectionRef }) {
  const visual = (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(119, 144, 222, 0.1) 0%, rgba(237, 106, 90, 0.1) 100%)',
        borderRadius: '16px',
        border: '2px solid rgba(119, 144, 222, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          background: 'linear-gradient(135deg, #7790de 0%, #ed6a5a 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '1.5rem',
        }}
      >
        🤖 Visual Coming Soon
      </Typography>
    </Box>
  )

  return (
    <JourneySection
      ref={sectionRef}
      id="copilot"
      title="An AI Copilot"
      description="Let AI be your database expert. From optimization to troubleshooting, OpenEverest's AI copilot helps you make smarter decisions and move faster."
      visual={visual}
    >
      <Typography sx={{ color: '#ededed', fontSize: '1rem', lineHeight: 1.8 }}>
        • Intelligent query optimization and indexing suggestions<br />
        • Automated performance tuning and monitoring<br />
        • Natural language database operations<br />
        • Proactive issue detection and resolution
      </Typography>
    </JourneySection>
  )
}
