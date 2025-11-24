import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './theme/theme'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import CurrentEverest from './pages/mockups/CurrentEverest'
import MultiDatabase from './pages/mockups/MultiDatabase'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mockups/current-everest" element={<CurrentEverest />} />
            <Route path="/mockups/multi-database" element={<MultiDatabase />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App