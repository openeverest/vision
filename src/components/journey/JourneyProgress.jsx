
import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function JourneyProgress({ activeSection }) {
  const sections = [
    { id: 'hero', label: 'Vision', color: '#ffffff' },
    { id: 'pluggable', label: 'Pluggable', color: '#7790de' },
    { id: 'anywhere', label: 'Truly Anywhere', color: '#ed6a5a' },
    { id: 'copilot', label: 'AI Copilot', color: '#7790de' },
  ]

  return (
    <Box
      sx={{
        position: 'fixed',
        left: { xs: 8, md: 32 },
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Typography
        sx={{
          color: '#7790de',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          marginBottom: 2,
          textTransform: 'uppercase',
        }}
      >
        Journey
      </Typography>
      {sections.map((section, index) => (
        <Box
          key={section.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 2,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateX(4px)',
            },
          }}
          onClick={() => {
            document.getElementById(section.id === 'hero' ? 'root' : section.id)?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Box
            sx={{
              width: activeSection === section.id ? '32px' : '16px',
              height: '2px',
              background: activeSection === section.id
                ? `linear-gradient(90deg, ${section.color} 0%, rgba(255,255,255,0.3) 100%)`
                : 'rgba(255,255,255,0.2)',
              marginRight: 2,
              transition: 'all 0.3s ease',
            }}
          />
          <Typography
            sx={{
              color: activeSection === section.id ? section.color : 'rgba(255,255,255,0.4)',
              fontSize: '0.875rem',
              fontWeight: activeSection === section.id ? 500 : 400,
              transition: 'all 0.3s ease',
            }}
          >
            {section.label}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
