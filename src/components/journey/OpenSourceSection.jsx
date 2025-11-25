
import { Box, Container, Typography } from '@mui/material'
import OpenSourceStory from './OpenSourceStory'
import cncfLogo from '../../assets/logos/cncf-logo.svg'
import everestLogo from '../../assets/logos/everest-white-full-color.svg'

export default function OpenSourceSection({ sectionRef }) {
  const stories = [
    {
      number: 1,
      title: "Foster Community",
      description: "We're committed to true open source. Our plan is to donate OpenEverest to the Cloud Native Computing Foundation (CNCF) and guide it through the incubation process. This ensures the project remains community-driven, vendor-neutral, and aligned with cloud-native best practices. By joining the CNCF ecosystem, we'll connect with contributors, users, and organizations who share our vision for open data management.",
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: '0 0 auto',
              maxWidth: '250px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <img
              src={cncfLogo}
              alt="CNCF"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
          
          <Box
            sx={{
              fontSize: '3rem',
              color: '#ed6a5a',
              animation: 'heartbeat 1.5s ease-in-out infinite',
              '@keyframes heartbeat': {
                '0%, 100%': {
                  transform: 'scale(1)',
                },
                '50%': {
                  transform: 'scale(1.1)',
                }
              }
            }}
          >
            ❤️
          </Box>
          
          <Box
            sx={{
              flex: '0 0 auto',
              maxWidth: '250px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <img
              src={everestLogo}
              alt="OpenEverest"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      )
    },
    {
      number: 2,
      title: "Developer Empowerment",
      description: "Open source accelerates innovation. From a developer and contributor perspective, it will take just a few days to add a new technology or integration, not months. The community can build awesome new plugins - whether it's a new database engine, monitoring integration, or deployment strategy. We provide the pluggable core; you bring the creativity and expertise to extend it in ways we haven't even imagined.",
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '600px',
              background: 'rgba(22, 22, 65, 0.6)',
              border: '1px solid rgba(119, 144, 222, 0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(119, 144, 222, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#7790de',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                percona/everest
              </Typography>
              <Box
                sx={{
                  padding: '4px 12px',
                  background: 'rgba(119, 144, 222, 0.15)',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  color: '#7790de',
                  fontWeight: 500,
                }}
              >
                Public
              </Box>
            </Box>

            {/* PR List */}
            <Box sx={{ padding: 2 }}>
              {[
                { title: 'Add support for Valkey database engine', author: 'alex-chen', status: 'merged', type: 'feature' },
                { title: 'Implement Prometheus metrics plugin', author: 'sarah-k', status: 'merged', type: 'plugin' },
                { title: 'Add MinIO storage backend integration', author: 'dev-mike', status: 'open', type: 'integration' },
                { title: 'Create Terraform provider for deployments', author: 'ops-ninja', status: 'merged', type: 'integration' },
                { title: 'Add Weaviate vector database support', author: 'ml-enthusiast', status: 'open', type: 'feature' },
              ].map((pr, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: '12px 16px',
                    marginBottom: 1,
                    background: 'rgba(119, 144, 222, 0.05)',
                    border: '1px solid rgba(119, 144, 222, 0.15)',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'rgba(119, 144, 222, 0.1)',
                      borderColor: 'rgba(119, 144, 222, 0.3)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    {/* Status Icon */}
                    <Box
                      sx={{
                        marginTop: '2px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: pr.status === 'merged' ? '#7790de' : '#ed6a5a',
                        flexShrink: 0,
                      }}
                    />
                    
                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: '#ededed',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          marginBottom: 0.5,
                        }}
                      >
                        {pr.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                        <Typography
                          sx={{
                            color: 'rgba(119, 144, 222, 0.7)',
                            fontSize: '0.8rem',
                          }}
                        >
                          by <Box component="span" sx={{ color: '#7790de', fontWeight: 500 }}>{pr.author}</Box>
                        </Typography>
                        <Box
                          sx={{
                            padding: '2px 8px',
                            background: 'rgba(237, 106, 90, 0.15)',
                            borderRadius: '12px',
                            fontSize: '0.7rem',
                            color: '#ed6a5a',
                            fontWeight: 500,
                          }}
                        >
                          {pr.type}
                        </Box>
                        <Typography
                          sx={{
                            color: pr.status === 'merged' ? '#7790de' : '#ed6a5a',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                          }}
                        >
                          {pr.status === 'merged' ? '✓ Merged' : '● Open'}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Footer */}
            <Box
              sx={{
                padding: '12px 20px',
                borderTop: '1px solid rgba(119, 144, 222, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(119, 144, 222, 0.7)',
                  fontSize: '0.875rem',
                }}
              >
                Community contributions
              </Typography>
              <Typography
                sx={{
                  color: '#7790de',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                150+ contributors
              </Typography>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      number: 3,
      title: "Ecosystem Integration",
      description: "Open source thrives on collaboration. We're building OpenEverest to work seamlessly with the tools developers already love and trust. Whether it's Terraform for infrastructure as code, Helm for package management, or GitOps workflows for continuous deployment, we're creating bridges to your existing DevOps toolkit. The community can contribute integrations with their favorite tools, ensuring OpenEverest fits naturally into diverse workflows rather than forcing a single approach.",
      visual: (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
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
            Seamless DevOps Integration
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', maxWidth: '600px' }}>
            {[
              { name: 'Terraform', desc: 'Infrastructure as Code' },
              { name: 'Helm', desc: 'Package management' },
              { name: 'ArgoCD', desc: 'GitOps deployment' },
              { name: 'Prometheus', desc: 'Monitoring & alerting' },
              { name: 'Grafana', desc: 'Observability platform' },
              { name: 'Vault', desc: 'Secrets management' }
            ].map((tool) => (
              <Box
                key={tool.name}
                sx={{
                  padding: '16px 20px',
                  background: 'rgba(119, 144, 222, 0.1)',
                  border: '1px solid rgba(119, 144, 222, 0.3)',
                  borderRadius: '12px',
                  minWidth: '160px',
                  flex: '1 1 calc(33.333% - 16px)',
                  maxWidth: '180px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(119, 144, 222, 0.15)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 12px rgba(119, 144, 222, 0.2)',
                  }
                }}
              >
                <Typography
                  sx={{
                    color: '#7790de',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    marginBottom: 0.5,
                    textAlign: 'center',
                  }}
                >
                  {tool.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#ededed',
                    fontSize: '0.75rem',
                    opacity: 0.8,
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                >
                  {tool.desc}
                </Typography>
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
              visual={story.visual}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
