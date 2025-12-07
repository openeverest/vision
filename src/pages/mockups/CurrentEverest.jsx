import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import everestLogo from '../../assets/logo-horizontal-full-color-white-min.png'
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
import { everestTheme } from '../../theme/everestTheme'
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

export default function CurrentEverest() {
  const [helpAnchor, setHelpAnchor] = useState(null)
  const [userAnchor, setUserAnchor] = useState(null)
  const [createDbAnchor, setCreateDbAnchor] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

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
          <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={everestLogo}
              alt="Everest Logo"
              sx={{ height: 40, width: 'auto' }}
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
          <Paper sx={{ p: 3, borderRadius: 1, boxShadow: '0px 2px 4px rgba(0,0,0,0.1)' }}>
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
                        <svg id="empty-state-icon" width="60px" height="60px" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40.3396 12.9979C53.5922 12.9979 64.3355 10.3121 64.3355 6.99896C64.3355 3.68583 53.5922 1 40.3396 1C27.0871 1 16.3438 3.68583 16.3438 6.99896C16.3438 10.3121 27.0871 12.9979 40.3396 12.9979Z" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M37.0659 37.0197C38.1416 37.0576 39.2362 37.0765 40.3498 37.0765C53.6045 37.0765 64.3457 34.3873 64.3457 31.0776" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M34.8164 24.9131C36.5902 25.0217 38.4365 25.0786 40.3396 25.0786C53.5942 25.0786 64.3355 22.3894 64.3355 19.0797" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M30.0896 48.428C33.4922 48.8181 36.9147 49.0098 40.3396 49.0021C53.5942 49.0021 64.3354 46.3129 64.3354 43.0031" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16.3438 55.0011V51.7482" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16.3438 16.3284V6.99896" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16.3438 55.001C16.3438 58.3108 27.0902 61 40.3396 61C53.5891 61 64.3355 58.3108 64.3355 55.001V6.99896" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M56.6761 19.5135C57.6985 19.5135 58.5274 18.6846 58.5274 17.6621C58.5274 16.6397 57.6985 15.8108 56.6761 15.8108C55.6536 15.8108 54.8247 16.6397 54.8247 17.6621C54.8247 18.6846 55.6536 19.5135 56.6761 19.5135Z" stroke="#0E5FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M56.6761 31.6795C57.6985 31.6795 58.5274 30.8506 58.5274 29.8282C58.5274 28.8057 57.6985 27.9768 56.6761 27.9768C55.6536 27.9768 54.8247 28.8057 54.8247 29.8282C54.8247 30.8506 55.6536 31.6795 56.6761 31.6795Z" stroke="#0E5FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M56.6761 43.3166C57.6985 43.3166 58.5274 42.4877 58.5274 41.4652C58.5274 40.4428 57.6985 39.6139 56.6761 39.6139C55.6536 39.6139 54.8247 40.4428 54.8247 41.4652C54.8247 42.4877 55.6536 43.3166 56.6761 43.3166Z" stroke="#0E5FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M56.6761 55.4826C57.6985 55.4826 58.5274 54.6537 58.5274 53.6313C58.5274 52.6088 57.6985 51.7799 56.6761 51.7799C55.6536 51.7799 54.8247 52.6088 54.8247 53.6313C54.8247 54.6537 55.6536 55.4826 56.6761 55.4826Z" stroke="#0E5FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M37.304 34.0616C37.3055 35.0614 37.2224 36.0596 37.0557 37.0455C36.3546 41.2367 34.1902 45.0435 30.9472 47.7894C27.7042 50.5353 23.5926 52.0425 19.3432 52.043C18.3383 52.0419 17.3352 51.9589 16.3438 51.7947C12.1633 51.0814 8.36998 48.9122 5.63505 45.671C2.90011 42.4299 1.3999 38.3257 1.3999 34.0848C1.3999 29.844 2.90011 25.7398 5.63505 22.4986C8.36998 19.2575 12.1633 17.0883 16.3438 16.3749C17.3352 16.2108 18.3383 16.1278 19.3432 16.1267C24.1031 16.124 28.6691 18.0118 32.0373 21.3751C35.4054 24.7384 37.2998 29.3017 37.304 34.0616Z" stroke="#0E5FB5" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M28.321 31.031V37.03H22.3427V43.0135H16.3489V37.03H10.3706V31.031H16.3489V25.0528H22.3427V31.031H28.321Z" stroke="#2C323E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <Stack alignItems="center" spacing={1}>
                          <Typography variant="body1" sx={{ color: '#666', fontSize: '0.875rem' }}>
                            You currently do not have any database cluster.
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#666', fontSize: '0.875rem' }}>
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
    </ThemeProvider>
  )
}