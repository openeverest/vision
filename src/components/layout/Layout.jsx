
import { Box } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </Box>
  )
}
