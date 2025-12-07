import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Typography,
  Paper,
  Avatar,
  Divider,
  TextField,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Grid,
  Chip,
} from '@mui/material'
import { everestTheme } from '../../theme/everestTheme'
import {
  Help as HelpIcon,
  PersonOutline as PersonOutlineIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
  Storage as StorageIcon,
  Settings as SettingsIcon,
  SmartToy as SmartToyIcon,
  Send as SendIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
} from '@mui/icons-material'
import everestLogo from '../../assets/logo-horizontal-full-color-white-min.png'

const DRAWER_WIDTH = 72

const chatMessages = [
  {
    role: 'user',
    content: 'Do I have any performance issues right now?',
    timestamp: '2:34 PM'
  },
  {
    role: 'assistant',
    content: 'I\'ve analyzed your database infrastructure and identified two performance issues requiring attention:',
    timestamp: '2:34 PM',
    issues: [
      {
        severity: 'high',
        database: 'AWS Aurora (production-aurora)',
        issue: 'IOPS Pressure',
        details: 'Current IOPS utilization at 87%, approaching the provisioned limit of 3000 IOPS. This is causing increased latency on write operations.',
        recommendation: 'Consider upgrading to a larger instance class or increasing provisioned IOPS.'
      },
      {
        severity: 'medium',
        database: 'PostgreSQL K8s (production-postgres)',
        issue: 'CPU Pressure - Auto-scaling Active',
        details: 'CPU utilization spiked to 82%, triggering horizontal pod autoscaling. Currently scaling from 3 to 5 replicas.',
        recommendation: 'Monitor query performance and consider optimizing slow queries or increasing resource limits.'
      }
    ],
    metrics: true
  }
]

export default function AICopilot() {
  const [helpAnchor, setHelpAnchor] = useState(null)
  const [userAnchor, setUserAnchor] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <ThemeProvider theme={everestTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#fafafa', fontFamily: 'Roboto, sans-serif' }}>
        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{
            bgcolor: '#fff',
            color: '#2C323E',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            {/* Everest Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img 
                src={everestLogo} 
                alt="OpenEverest" 
                style={{ height: '32px', width: 'auto' }}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Help and User Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={(e) => setHelpAnchor(e.currentTarget)} color="inherit">
                <HelpIcon />
              </IconButton>
              <IconButton onClick={(e) => setUserAnchor(e.currentTarget)} color="inherit">
                <PersonOutlineIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              bgcolor: '#fff',
              borderRight: '1px solid #e0e0e0',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ p: 1 }}>
            <IconButton sx={{ width: '100%' }}>
              <KeyboardDoubleArrowRightIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem sx={{ justifyContent: 'center', p: 1 }}>
              <IconButton>
                <StorageIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ justifyContent: 'center', p: 1 }}>
              <IconButton
                sx={{
                  bgcolor: '#0E5FB5',
                  color: '#fff',
                  '&:hover': { bgcolor: '#0d54a3' },
                }}
              >
                <SmartToyIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ justifyContent: 'center', p: 1 }}>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${DRAWER_WIDTH}px)` }}>
          <Toolbar />

          <Container maxWidth="xl" sx={{ mt: 2 }}>
            {/* Header */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" sx={{ color: '#2C323E', fontWeight: 500, mb: 1 }}>
                AI Copilot
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Your intelligent database assistant - Ask questions, get insights, and optimize performance
              </Typography>
            </Box>

            {/* Chat Interface */}
            <Paper sx={{ borderRadius: 1, boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', height: 'calc(100vh - 220px)', display: 'flex', flexDirection: 'column' }}>
              {/* Chat Messages */}
              <Box sx={{ flex: 1, overflowY: 'auto', p: 3 }}>
                {chatMessages.map((msg, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Avatar
                        sx={{
                          bgcolor: msg.role === 'user' ? '#0E5FB5' : '#2e7d32',
                          width: 36,
                          height: 36,
                        }}
                      >
                        {msg.role === 'user' ? 'U' : <SmartToyIcon sx={{ fontSize: 20 }} />}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Typography sx={{ fontWeight: 600, color: '#2C323E' }}>
                            {msg.role === 'user' ? 'You' : 'AI Copilot'}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#999' }}>
                            {msg.timestamp}
                          </Typography>
                        </Box>
                        <Typography sx={{ color: '#2C323E', mb: 2 }}>
                          {msg.content}
                        </Typography>

                        {/* Issues Cards */}
                        {msg.issues && (
                          <Box sx={{ mb: 3 }}>
                            {msg.issues.map((issue, issueIndex) => (
                              <Card key={issueIndex} sx={{ mb: 2, border: '1px solid #e0e0e0' }}>
                                <CardContent>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <WarningIcon sx={{ color: issue.severity === 'high' ? '#d32f2f' : '#ed6c02' }} />
                                    <Typography sx={{ fontWeight: 600, color: '#2C323E' }}>
                                      {issue.database}
                                    </Typography>
                                    <Chip
                                      label={issue.severity.toUpperCase()}
                                      size="small"
                                      sx={{
                                        bgcolor: issue.severity === 'high' ? '#ffebee' : '#fff3e0',
                                        color: issue.severity === 'high' ? '#d32f2f' : '#ed6c02',
                                        fontWeight: 600,
                                      }}
                                    />
                                  </Box>
                                  <Typography variant="subtitle2" sx={{ color: '#0E5FB5', mb: 1, fontWeight: 600 }}>
                                    {issue.issue}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                                    {issue.details}
                                  </Typography>
                                  <Box sx={{ bgcolor: '#f5f5f5', p: 1.5, borderRadius: 1, borderLeft: '3px solid #0E5FB5' }}>
                                    <Typography variant="body2" sx={{ color: '#2C323E', fontWeight: 500 }}>
                                      💡 Recommendation: {issue.recommendation}
                                    </Typography>
                                  </Box>
                                </CardContent>
                              </Card>
                            ))}
                          </Box>
                        )}

                        {/* Performance Metrics */}
                        {msg.metrics && (
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: '#2C323E', mb: 2 }}>
                              Performance Metrics Overview
                            </Typography>
                            <Grid container spacing={2}>
                              {/* IOPS Chart */}
                              <Grid item xs={12} md={6}>
                                <Card sx={{ border: '1px solid #e0e0e0' }}>
                                  <CardContent>
                                    <Typography variant="subtitle2" sx={{ mb: 2, color: '#2C323E', fontWeight: 600 }}>
                                      AWS Aurora - IOPS Utilization
                                    </Typography>
                                    <Box
                                      sx={{
                                        height: 200,
                                        background: 'linear-gradient(to top, #ffebee 0%, #ffebee 87%, #e8f5e9 87%, #e8f5e9 100%)',
                                        borderRadius: 1,
                                        position: 'relative',
                                        border: '1px solid #e0e0e0',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: 2,
                                      }}
                                    >
                                      <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'flex-end' }}>
                                        {[65, 72, 68, 75, 82, 79, 87].map((value, i) => (
                                          <Box
                                            key={i}
                                            sx={{
                                              flex: 1,
                                              height: `${value}%`,
                                              bgcolor: value > 80 ? '#d32f2f' : '#0E5FB5',
                                              opacity: 0.8,
                                              borderRadius: '4px 4px 0 0',
                                              transition: 'all 0.3s',
                                              '&:hover': { opacity: 1 },
                                            }}
                                          />
                                        ))}
                                      </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                      <Typography variant="caption" sx={{ color: '#666' }}>
                                        Current: <strong style={{ color: '#d32f2f' }}>87%</strong>
                                      </Typography>
                                      <Typography variant="caption" sx={{ color: '#666' }}>
                                        Limit: 3000 IOPS
                                      </Typography>
                                    </Box>
                                  </CardContent>
                                </Card>
                              </Grid>

                              {/* CPU Chart */}
                              <Grid item xs={12} md={6}>
                                <Card sx={{ border: '1px solid #e0e0e0' }}>
                                  <CardContent>
                                    <Typography variant="subtitle2" sx={{ mb: 2, color: '#2C323E', fontWeight: 600 }}>
                                      PostgreSQL K8s - CPU Utilization
                                    </Typography>
                                    <Box
                                      sx={{
                                        height: 200,
                                        background: 'linear-gradient(to top, #fff3e0 0%, #fff3e0 82%, #e8f5e9 82%, #e8f5e9 100%)',
                                        borderRadius: 1,
                                        position: 'relative',
                                        border: '1px solid #e0e0e0',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: 2,
                                      }}
                                    >
                                      <Box sx={{ display: 'flex', gap: 1, width: '100%', alignItems: 'flex-end' }}>
                                        {[45, 52, 58, 64, 71, 76, 82].map((value, i) => (
                                          <Box
                                            key={i}
                                            sx={{
                                              flex: 1,
                                              height: `${value}%`,
                                              bgcolor: value > 75 ? '#ed6c02' : '#0E5FB5',
                                              opacity: 0.8,
                                              borderRadius: '4px 4px 0 0',
                                              transition: 'all 0.3s',
                                              '&:hover': { opacity: 1 },
                                            }}
                                          />
                                        ))}
                                      </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                      <Typography variant="caption" sx={{ color: '#666' }}>
                                        Current: <strong style={{ color: '#ed6c02' }}>82%</strong>
                                      </Typography>
                                      <Typography variant="caption" sx={{ color: '#2e7d32' }}>
                                        Scaling: 3 → 5 pods
                                      </Typography>
                                    </Box>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </Grid>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Divider />

              {/* Message Input */}
              <Box sx={{ p: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Ask about performance, query optimization, or any database issue..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton sx={{ color: '#0E5FB5' }}>
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '&:hover fieldset': {
                        borderColor: '#0E5FB5',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#0E5FB5',
                      },
                    },
                  }}
                />
                <Typography variant="caption" sx={{ color: '#999', display: 'block', mt: 1 }}>
                  AI Copilot analyzes your database infrastructure in real-time
                </Typography>
              </Box>
            </Paper>
          </Container>
        </Box>

        {/* Help Menu */}
        <Menu anchorEl={helpAnchor} open={Boolean(helpAnchor)} onClose={() => setHelpAnchor(null)}>
          <MenuItem disabled>
            <Typography variant="caption">OpenEverest v2.0.0</Typography>
          </MenuItem>
          <Divider />
          <MenuItem component="a" href="https://hubs.ly/Q02YRLsL0" target="_blank">
            Community Support
          </MenuItem>
          <MenuItem component="a" href="https://docs.percona.com/everest/" target="_blank">
            Documentation
          </MenuItem>
          <MenuItem component="a" href="https://github.com/percona/everest/issues" target="_blank">
            Report issue
          </MenuItem>
          <MenuItem component="a" href="https://forums.percona.com/c/percona-everest" target="_blank">
            Forum
          </MenuItem>
        </Menu>

        {/* User Menu */}
        <Menu anchorEl={userAnchor} open={Boolean(userAnchor)} onClose={() => setUserAnchor(null)}>
          <MenuItem disabled>
            <Typography variant="caption">admin</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />}
              label="Dark mode"
              labelPlacement="start"
            />
          </MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      </Box>
    </ThemeProvider>
  )
}