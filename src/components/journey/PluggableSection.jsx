
import { Box, Typography } from '@mui/material'
import JourneySection from './JourneySection'

export default function PluggableSection({ sectionRef }) {
  const visual = (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        background: 'rgba(119, 144, 222, 0.1)',
        borderRadius: '16px',
        border: '2px solid rgba(119, 144, 222, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ color: '#7790de', fontSize: '1.5rem' }}>
        🔌 Visual Coming Soon
      </Typography>
    </Box>
  )

  return (
    <JourneySection
      ref={sectionRef}
      id="pluggable"
      title="Pluggable"
      description="OpenEverest is designed with modularity at its core. Mix and match database engines, storage backends, and deployment strategies to create the perfect solution for your needs."
      visual={visual}
    >
      <Typography sx={{ color: '#ededed', fontSize: '1rem', lineHeight: 1.8 }}>
        • Choose your database engine (PostgreSQL, MySQL, MongoDB, and more)<br />
        • Swap storage providers without changing your application<br />
        • Extend functionality with custom plugins<br />
        • Build exactly what you need, nothing more
      </Typography>
    </JourneySection>
  )
}
