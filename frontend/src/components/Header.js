import React from 'react'
import { AppBar, Container, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <p>p</p>
        </Toolbar>
      </Container>
    </AppBar>
  )
}