import Base from './components/Base'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, purple } from '@mui/material/colors'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: purple
  }
})

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Base />
      </ThemeProvider>
    </BrowserRouter>
  )
}
