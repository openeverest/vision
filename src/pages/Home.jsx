
import { useState, useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import Hero from '../components/home/Hero'
import JourneyProgress from '../components/journey/JourneyProgress'
import PluggableSection from '../components/journey/PluggableSection'
import AnywhereSection from '../components/journey/AnywhereSection'
import CopilotSection from '../components/journey/CopilotSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const heroRef = useRef(null)
  const pluggableRef = useRef(null)
  const anywhereRef = useRef(null)
  const copilotRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'pluggable', ref: pluggableRef },
        { id: 'anywhere', ref: anywhereRef },
        { id: 'copilot', ref: copilotRef },
      ]

      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box sx={{ position: 'relative' }}>
      <JourneyProgress activeSection={activeSection} />
      <Box ref={heroRef}>
        <Hero />
      </Box>
      <PluggableSection sectionRef={pluggableRef} />
      <AnywhereSection sectionRef={anywhereRef} />
      <CopilotSection sectionRef={copilotRef} />
    </Box>
  )
}
