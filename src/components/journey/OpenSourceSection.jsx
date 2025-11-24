
import { Box, Container, Typography } from '@mui/material'
import OpenSourceStory from './OpenSourceStory'

export default function OpenSourceSection({ sectionRef }) {
  const stories = [
    {
      number: 1,
      title: "Foster Community",
      description: "We're committed to true open source. Our plan is to donate OpenEverest to the Cloud Native Computing Foundation (CNCF) and guide it through the incubation process. This ensures the project remains community-driven, vendor-neutral, and aligned with cloud-native best practices. By joining the CNCF ecosystem, we'll connect with a vibrant community of contributors, users, and organizations who share our vision for open database management."
    },
    {
      number: 2,
      title: "Developer Empowerment",
      description: "Open source accelerates innovation. From a developer and contributor perspective, it will take just a few days to add a new technology or integration, not months. The community can build awesome new plugins - whether it's a new database engine, monitoring integration, or deployment strategy. We provide the pluggable core; you bring the creativity and expertise to extend it in ways we haven't even imagined."
    },
    {
      number: 3,
      title: "Ecosystem Integration",
      description: "Open source thrives on collaboration. We're building OpenEverest to work seamlessly with the tools developers already love and trust. Whether it's Terraform for infrastructure as code, Helm for package management, or GitOps workflows for continuous deployment, we're creating bridges to your existing DevOps toolkit. The community can contribute integrations with their favorite tools, ensuring OpenEverest fits naturally into diverse workflows rather than forcing a single approach."
    }
  ]

  return (
    <Box
      ref={sectionRef}
      id="opensource"
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
            Open Source
          </Typography>
          <Typography
            sx={{
              color: '#ededed',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
            }}
          >
            Built by the community, for the community. OpenEverest embraces true open source principles to foster innovation, collaboration, and transparency.
          </Typography>
        </Box>

        <Box sx={{ marginTop: { xs: 6, md: 8 } }}>
          {stories.map((story) => (
            <OpenSourceStory
              key={story.number}
              number={story.number}
              title={story.title}
              description={story.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
