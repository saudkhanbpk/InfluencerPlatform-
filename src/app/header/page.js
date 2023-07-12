'use client'
import { Box } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Box sx={{
        p:2,
        ml:8
      }}>
      <img
              alt="Amplify"
              src="/image/logo.png"
              style={{
                maxWidth: '53.62px',
                width: '100%'
              }}
            />
      </Box>
    </div>
  )
}

export default Header
