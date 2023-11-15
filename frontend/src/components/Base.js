import React, { useState } from 'react'
import {Box, Typography} from '@mui/material'

export default function Base() {
  return (
    <Box>
      <Typography variant='h1' sx={{
        textAlign: 'center'
      }}>foobar</Typography>
    </Box>
  )
}
