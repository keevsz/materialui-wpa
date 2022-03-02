import React from 'react'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core'
import theme from './temaConfig'

const Theme = () => {
  return (
    <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="contained" color="secondary">
          Button
        </Button>
    </ThemeProvider>
  )
}

export default Theme