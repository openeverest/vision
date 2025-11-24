
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
