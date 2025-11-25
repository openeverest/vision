
import { Box, Container, Typography } from '@mui/material'
import AnywhereStory from './AnywhereStory'
import dokSurveyImage from '../../../attached_assets/image_1763988191457.png'

export default function AnywhereSection({ sectionRef }) {
  const stories = [
    {
      number: 1,
      title: "Run Data Anywhere on Kubernetes",
      description: (
        <>
          OpenEverest leverages Kubernetes to run databases anywhere - in the cloud, on-premises, or hybrid environments. 
          According to the <a href="https://dok.community/blog/beyond-adoption-the-age-of-operational-excellence/" target="_blank" rel="noopener noreferrer" style={{ color: '#7790de', textDecoration: 'underline' }}>Data on Kubernetes survey</a>, 
          50% of organizations already run data workloads on Kubernetes in production.
        </>
      ),
      visual: (
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            background: '#ffffff',
            borderRadius: '16px',
            padding: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <img
            src={dokSurveyImage}
            alt="Production DoK Workloads"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      )
    },
    {
      number: 2,
      title: "Manage Cloud-Native & Managed Services",
      description: "We won't stop at Kubernetes. OpenEverest will enable you to manage AWS Aurora, GCP CloudSQL, Neon, and other managed services through the same unified UI and API. Leverage the best tools and standards in the industry through seamless integrations.",
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
            Unified Control Plane
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['AWS Aurora', 'GCP CloudSQL', 'Neon', 'Azure Database', 'K8S Operators', 'Self-managed clusters'].map((service) => (
              <Box
                key={service}
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
                {service}
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
      id="anywhere"
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
              background: 'linear-gradient(135deg, #ed6a5a 0%, #7790de 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 3,
              fontWeight: 500,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Truly Anywhere
          </Typography>
          <Typography
            sx={{
              color: '#ededed',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
            }}
          >
            Deploy your databases wherever you need them - from edge devices to massive cloud clusters. One platform, infinite possibilities.
          </Typography>
        </Box>

        <Box sx={{ marginTop: { xs: 6, md: 8 } }}>
          {stories.map((story) => (
            <AnywhereStory
              key={story.number}
              number={story.number}
              title={story.title}
              description={story.description}
              visual={story.visual}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
