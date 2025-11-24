
import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
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
  Chip,
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
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material'

const DRAWER_WIDTH = 72

const databaseCategories = {
  'Relational (SQL)': [
    'MySQL', 'PostgreSQL', 'MariaDB', 'Vitess', 'CockroachDB', 
    'YugabyteDB', 'TiDB', 'Oracle Database', 'Microsoft SQL Server', 
    'SQLite', 'SAP HANA', 'Amazon Aurora'
  ],
  'NoSQL Document': [
    'MongoDB', 'DocumentDB', 'Couchbase', 'ArangoDB', 'RethinkDB'
  ],
  'Key-Value & Caches': [
    'Redis', 'Valkey', 'Memcached', 'Amazon DynamoDB', 'etcd'
  ],
  'Search & Analytics': [
    'ElasticSearch', 'ClickHouse', 'Apache Solr', 'Splunk', 
    'Amazon OpenSearch Service', 'Druid'
  ],
  'Graph Databases': [
    'Neo4J', 'Weaviate', 'Amazon Neptune', 'DSE Graph', 'TigerGraph'
  ],
  'Wide-Column Stores': [
    'Cassandra/K8ssandra', 'Apache HBase', 'ScyllaDB'
  ],
  'Cloud-Native Storage': [
    'MinIO', 'OpenEBS', 'Ceph', 'GlusterFS', 'Portworx'
  ]
}

// Sample database clusters for the table
const sampleClusters = [
  {
    status: 'Running',
    name: 'production-postgres',
    technology: 'PostgreSQL',
    category: 'Relational (SQL)',
    lastBackup: '2 hours ago',
    nodes: 3,
    namespace: 'production',
    monitoring: 'PMM-prod'
  },
  {
    status: 'Running',
    name: 'analytics-clickhouse',
    technology: 'ClickHouse',
    category: 'Search & Analytics',
    lastBackup: '1 hour ago',
    nodes: 5,
    namespace: 'analytics',
    monitoring: 'Prometheus-01'
  },
  {
    status: 'Running',
    name: 'cache-redis',
    technology: 'Redis',
    category: 'Key-Value & Caches',
    lastBackup: 'N/A',
    nodes: 2,
    namespace: 'production',
    monitoring: 'PMM-prod'
  },
  {
    status: 'Running',
    name: 'user-mongodb',
    technology: 'MongoDB',
    category: 'NoSQL Document',
    lastBackup: '3 hours ago',
    nodes: 3,
    namespace: 'production',
    monitoring: 'PMM-prod'
  },
  {
    status: 'Running',
    name: 'graph-neo4j',
    technology: 'Neo4J',
    category: 'Graph Databases',
    lastBackup: '4 hours ago',
    nodes: 3,
    namespace: 'ml-services',
    monitoring: 'Grafana-01'
  },
  {
    status: 'Running',
    name: 'timeseries-cassandra',
    technology: 'Cassandra/K8ssandra',
    category: 'Wide-Column Stores',
    lastBackup: '1 hour ago',
    nodes: 4,
    namespace: 'iot',
    monitoring: 'PMM-iot'
  },
  {
    status: 'Running',
    name: 'storage-minio',
    technology: 'MinIO',
    category: 'Cloud-Native Storage',
    lastBackup: 'Continuous',
    nodes: 4,
    namespace: 'storage',
    monitoring: 'Prometheus-storage'
  },
  {
    status: 'Running',
    name: 'dev-mysql',
    technology: 'MySQL',
    category: 'Relational (SQL)',
    lastBackup: '5 hours ago',
    nodes: 1,
    namespace: 'development',
    monitoring: 'PMM-dev'
  }
]

export default function MultiDatabase() {
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
            {/* Header with stats */}
            <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>Total Clusters</Typography>
                <Typography variant="h4" sx={{ color: '#0E5FB5', fontWeight: 500 }}>
                  {sampleClusters.length}
                </Typography>
              </Paper>
              <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>Database Types</Typography>
                <Typography variant="h4" sx={{ color: '#0E5FB5', fontWeight: 500 }}>
                  {Object.keys(databaseCategories).length}
                </Typography>
              </Paper>
              <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>Running Nodes</Typography>
                <Typography variant="h4" sx={{ color: '#0E5FB5', fontWeight: 500 }}>
                  {sampleClusters.reduce((acc, cluster) => acc + cluster.nodes, 0)}
                </Typography>
              </Paper>
            </Box>

            <Paper sx={{ p: 3, borderRadius: 1, boxShadow: '0px 2px 4px rgba(0,0,0,0.1)' }}>
              {/* Toolbar */}
              <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
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
                  <Button variant="outlined" endIcon={<ArrowDropDownIcon />}>
                    Import
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
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
                      <TableCell>Category</TableCell>
                      <TableCell>Last backup</TableCell>
                      <TableCell>Nº nodes</TableCell>
                      <TableCell>Namespace</TableCell>
                      <TableCell>Monitoring instance</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sampleClusters.map((cluster, index) => (
                      <TableRow key={index} hover>
                        <TableCell>
                          <Chip
                            icon={<CheckCircleIcon />}
                            label={cluster.status}
                            size="small"
                            sx={{
                              bgcolor: '#e8f5e9',
                              color: '#2e7d32',
                              '& .MuiChip-icon': { color: '#2e7d32' }
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography sx={{ fontWeight: 500, color: '#2C323E' }}>
                            {cluster.name}
                          </Typography>
                        </TableCell>
                        <TableCell>{cluster.technology}</TableCell>
                        <TableCell>
                          <Chip
                            label={cluster.category}
                            size="small"
                            sx={{
                              bgcolor: '#e3f2fd',
                              color: '#1976d2',
                              fontSize: '0.75rem'
                            }}
                          />
                        </TableCell>
                        <TableCell>{cluster.lastBackup}</TableCell>
                        <TableCell>{cluster.nodes}</TableCell>
                        <TableCell>{cluster.namespace}</TableCell>
                        <TableCell>{cluster.monitoring}</TableCell>
                        <TableCell>
                          <IconButton size="small">
                            <MoreVertIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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

        {/* Create Database Menu - Organized by Category */}
        <Menu 
          anchorEl={createDbAnchor} 
          open={Boolean(createDbAnchor)} 
          onClose={() => setCreateDbAnchor(null)}
          PaperProps={{
            sx: {
              maxHeight: 500,
              width: 320,
            }
          }}
        >
          {Object.entries(databaseCategories).map(([category, databases], categoryIndex) => (
            <Box key={categoryIndex}>
              <MenuItem disabled sx={{ opacity: 1, bgcolor: '#f5f5f5' }}>
                <Typography variant="caption" sx={{ fontWeight: 600, color: '#0E5FB5' }}>
                  {category}
                </Typography>
              </MenuItem>
              {databases.map((db, dbIndex) => (
                <MenuItem 
                  key={dbIndex} 
                  onClick={() => setCreateDbAnchor(null)}
                  sx={{ pl: 3 }}
                >
                  {db}
                </MenuItem>
              ))}
              {categoryIndex < Object.entries(databaseCategories).length - 1 && <Divider />}
            </Box>
          ))}
        </Menu>
      </Box>
    </ThemeProvider>
  )
}
