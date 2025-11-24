import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './theme/theme'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import DatabaseManagement from './pages/DatabaseManagement'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/databases" element={<DatabaseManagement />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App