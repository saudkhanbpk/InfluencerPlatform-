"use client"
import Image from 'next/image';
import { createContext, useRef } from 'react';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';


const Jobs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '20px', '@media (max-width: 600px)': { padding: '10px' } }}>
      {/* Individual influencer opportunity entries */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <Image src="/image/brandprofile.png" width={35} height={35} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '18px',
                  fontFamily: 'Plus Jakarta Sans',
                  lineHeight: '21.6px',
                }}
              >
                Canada Goose
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '22px',
                  pt: 0,
                  mb: 0,
                }}
              >
                Established since 2010
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Box sx={{ mr: 2 }}>
              <PeopleOutlinedIcon sx={{ fontSize: '28px' }} />
            </Box>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '30px',
                }}
              >
                25-75
              </Typography>
            </Box>

            <Box sx={{ ml: 3 }}>
              <VerifiedOutlinedIcon />
            </Box>

            <Box sx={{ ml: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#15B79E',
                  lineHeight: '30px',
                }}
              >
                VERIFIED
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: 'white', boxShadow: '1', borderRadius: '10px', mt: 2 }}>
          <Box sx={{ padding: '16px' }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: 'Inter',
                color: '#111927',
                lineHeight: '25px',
              }}
            >
              Instagram Influencer for a clothing brand who can market our products for a week
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '20px',
                  mb: 1,
                }}
              >
                Budget • $400- $600
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '20px',
                  mb: 1,
                }}
              >
                Job type • Content creation & Shoutouts
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '20px',
                }}
              >
                Payment type • Paid
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#6C737F',
                  lineHeight: '19px',
                  mt: 1,
                  mr: 2,
                }}
              >
                5d Ago
              </Typography>
              <Button sx={{ color: '#2970FF', fontSize: '14px', fontWeight: 600, lineHeight: '24px', fontFamily: 'Inter', backgroundColor: 'white' }}>
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobs;
