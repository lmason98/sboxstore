import React from 'react'
import {
  Box,
  Typography
} from '@mui/material'
import Header from './Header'

export default function Base() {
  return (
    <Box>
      <Header />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, _i) => (
        <Typography variant='h1' sx={{
          textAlign: 'center'
        }}>foobar {i}</Typography>
      ))}
    </Box>
  )
}
