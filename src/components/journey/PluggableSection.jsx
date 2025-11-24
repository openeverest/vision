
<old_str>
import { Box, Typography } from '@mui/material'
import JourneySection from './JourneySection'
import PluggableStory from './PluggableStory'

export default function PluggableSection({ sectionRef }) {
  const stories = [
    {
      number: 1,
      title: "The Lock-In Challenge",
      description: "Right now OpenEverest is locking users in. Only three database offerings - MySQL, PostgreSQL and MongoDB. All three are using Percona Operators. To monitor the databases users must use Percona Monitoring and Management."
    },
    {
      number: 2,
      title: "The Pluggable Vision",
      description: "It seems a good idea to add more databases or integrations, but it is quite complex process right now. We will turn OpenEverest into a pluggable core, where database, storage and other technologies are a plugin. We will see ClickHouse, Vitess, DocumentDB, Valkey, integration with Prometheus and other technologies coming soon."
    },
    {
      number: 3,
      title: "Developer Empowerment",
      description: "From a developer and contributor perspective it will take few days to add a new tech or integration, not months."
    }
  ]

  const visual = (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
      }}
    >
      {stories.map((story, index) => (
        <PluggableStory
          key={story.number}
          number={story.number}
          title={story.title}
          description={story.description}
          delay={index * 200}
        />
      ))}
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
</old_str>
<new_str>
import { Box, Container, Typography } from '@mui/material'
import PluggableStory from './PluggableStory'

export default function PluggableSection({ sectionRef }) {
  const stories = [
    {
      number: 1,
      title: "The Lock-In Challenge",
      description: "Right now OpenEverest is locking users in. Only three database offerings - MySQL, PostgreSQL and MongoDB. All three are using Percona Operators. To monitor the databases users must use Percona Monitoring and Management."
    },
    {
      number: 2,
      title: "The Pluggable Vision",
      description: "It seems a good idea to add more databases or integrations, but it is quite complex process right now. We will turn OpenEverest into a pluggable core, where database, storage and other technologies are a plugin. We will see ClickHouse, Vitess, DocumentDB, Valkey, integration with Prometheus and other technologies coming soon."
    },
    {
      number: 3,
      title: "Developer Empowerment",
      description: "From a developer and contributor perspective it will take few days to add a new tech or integration, not months."
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
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
</new_str>
