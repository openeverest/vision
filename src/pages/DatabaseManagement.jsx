
import { useState } from 'react'
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Menu,
  MenuItem,
  List,
  ListItem,
  Switch,
  FormControlLabel,
} from '@mui/material'
import {
  Help as HelpIcon,
  PersonOutline as PersonOutlineIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
  Storage as StorageIcon,
  Settings as SettingsIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  ViewColumn as ViewColumnIcon,
  MoreVert as MoreVertIcon,
  ArrowDropDown as ArrowDropDownIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
} from '@mui/icons-material'

const DRAWER_WIDTH = 72

export default function DatabaseManagement() {
  const [helpAnchor, setHelpAnchor] = useState(null)
  const [userAnchor, setUserAnchor] = useState(null)
  const [createDbAnchor, setCreateDbAnchor] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
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
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <svg width="160" height="40" viewBox="0 0 337 128" fill="none">
              <rect width="128" height="128" rx="19.2" fill="url(#paint0_radial)" />
              <path d="M63.9742 24L44.9306 56.9806H51.3673L63.9742 35.1474L95.8931 90.4258H32.0554L48.1486 62.5548H41.7119L38.4933 68.129H44.9298L41.7112 73.7032H35.2746L22.4 96H105.548L99.1111 84.8516H92.6746L89.4559 79.2774H95.8925L63.9742 24Z" fill="white" />
              <defs>
                <radialGradient id="paint0_radial">
                  <stop offset="0.333333" stopColor="#0E5FB5" />
                  <stop offset="1" stopColor="#62AEFF" />
                </radialGradient>
              </defs>
            </svg>
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
            <IconButton
              sx={{
                bgcolor: '#0E5FB5',
                color: '#fff',
                '&:hover': { bgcolor: '#0d54a3' },
              }}
            >
              <StorageIcon />
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
          <Paper sx={{ p: 2 }}>
            {/* Toolbar */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'flex-end' }}>
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
              <IconButton size="small">
                <FilterListIcon />
              </IconButton>
              <IconButton size="small">
                <ViewColumnIcon />
              </IconButton>
            </Box>

            {/* Table */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        Status
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell>Database name</TableCell>
                    <TableCell>Technology</TableCell>
                    <TableCell>Last backup</TableCell>
                    <TableCell>Nº nodes</TableCell>
                    <TableCell>Namespace</TableCell>
                    <TableCell>Monitoring instance name</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={8}>
                      {/* Empty State */}
                      <Stack alignItems="center" spacing={3} sx={{ py: 8 }}>
                        <svg width="60" height="60" viewBox="0 0 66 62" fill="none">
                          <path d="M40.3396 12.9979C53.5922 12.9979 64.3355 10.3121 64.3355 6.99896C64.3355 3.68583 53.5922 1 40.3396 1C27.0871 1 16.3438 3.68583 16.3438 6.99896C16.3438 10.3121 27.0871 12.9979 40.3396 12.9979Z" stroke="#2C323E" strokeWidth="2" />
                          <path d="M16.3438 55.001C16.3438 58.3108 27.0902 61 40.3396 61C53.5891 61 64.3355 58.3108 64.3355 55.001V6.99896" stroke="#2C323E" strokeWidth="2" />
                          <path d="M37.304 34.0616C37.3055 35.0614 37.2224 36.0596 37.0557 37.0455C36.3546 41.2367 34.1902 45.0435 30.9472 47.7894C27.7042 50.5353 23.5926 52.0425 19.3432 52.043C18.3383 52.0419 17.3352 51.9589 16.3438 51.7947" stroke="#0E5FB5" strokeWidth="2" />
                          <path d="M28.321 31.031V37.03H22.3427V43.0135H16.3489V37.03H10.3706V31.031H16.3489V25.0528H22.3427V31.031H28.321Z" stroke="#2C323E" strokeWidth="2" />
                        </svg>

                        <Stack alignItems="center" spacing={1}>
                          <Typography variant="body1" color="text.secondary">
                            You currently do not have any database cluster.
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Create one to get started.
                          </Typography>
                        </Stack>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Button variant="text" endIcon={<ArrowDropDownIcon />}>
                            Import
                          </Button>
                          <Button
                            variant="contained"
                            endIcon={<ArrowDropDownIcon />}
                            onClick={(e) => setCreateDbAnchor(e.currentTarget)}
                            sx={{
                              bgcolor: '#0E5FB5',
                              '&:hover': { bgcolor: '#0d54a3' },
                            }}
                          >
                            Create database
                          </Button>
                        </Box>

                        <Divider sx={{ width: '100%', my: 2 }} />

                        <Button
                          variant="text"
                          startIcon={<HelpOutlineOutlinedIcon />}
                          component="a"
                          href="https://hubs.ly/Q02YRLsL0"
                          target="_blank"
                        >
                          Contact Percona support
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </Box>

      {/* Help Menu */}
      <Menu anchorEl={helpAnchor} open={Boolean(helpAnchor)} onClose={() => setHelpAnchor(null)}>
        <MenuItem disabled>
          <Typography variant="caption">Everest v1.9.0</Typography>
        </MenuItem>
        <Divider />
        <MenuItem component="a" href="https://hubs.ly/Q02YRLsL0" target="_blank">
          Percona Support
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

      {/* Create Database Menu */}
      <Menu anchorEl={createDbAnchor} open={Boolean(createDbAnchor)} onClose={() => setCreateDbAnchor(null)}>
        <MenuItem onClick={() => setCreateDbAnchor(null)}>MongoDB</MenuItem>
        <MenuItem onClick={() => setCreateDbAnchor(null)}>MySQL</MenuItem>
        <MenuItem onClick={() => setCreateDbAnchor(null)}>PostgreSQL</MenuItem>
      </Menu>
    </Box>
  )
}
