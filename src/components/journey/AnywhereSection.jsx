
import { Box, Typography } from '@mui/material'
import JourneySection from './JourneySection'

export default function AnywhereSection({ sectionRef }) {
  const visual = (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        background: 'rgba(237, 106, 90, 0.1)',
        borderRadius: '16px',
        border: '2px solid rgba(237, 106, 90, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ color: '#ed6a5a', fontSize: '1.5rem' }}>
        🌍 Visual Coming Soon
      </Typography>
    </Box>
  )

  return (
    <JourneySection
      ref={sectionRef}
      id="anywhere"
      title="Truly Anywhere"
      description="Deploy your databases wherever you need them - from edge devices to massive cloud clusters. One platform, infinite possibilities."
      visual={visual}
    >
      <Typography sx={{ color: '#ededed', fontSize: '1rem', lineHeight: 1.8 }}>
        • Run on your laptop, Raspberry Pi, or enterprise servers<br />
        • Deploy to any cloud provider (AWS, GCP, Azure, etc.)<br />
        • Edge computing ready for IoT and distributed systems<br />
        • Consistent experience across all environments
      </Typography>
    </JourneySection>
  )
}
