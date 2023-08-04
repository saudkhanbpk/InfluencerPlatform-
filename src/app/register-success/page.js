"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const Registered = () => {
  const router = useRouter('')
  const submit = () => {
    router.push('/brandprofile')
  }
  return (
    <Box sx={{
      backgroundImage: "url('/image/hero-bg.png')",
      backgroundSize: 'cover', // Adjust the background size as needed
      backgroundPosition: 'center', // Adjust the background position as needed
      py: 10
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              alt="Amplify"
              src="/image/logo2.png"
              width={125}
              height={40}
            />
          </Box>

          <Box
            sx={{
              width: "100%", // Make the container take full width
              maxWidth: "350px", // Add a max width
              margin: "auto",
              borderRadius: "16px",
              marginTop: "30px",
              backgroundColor: "#F9FAFF",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                alt="Amplify"
                src="/image/register-log.png"
                width={238}
                height={238}
              />
            </Box>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "28px",
                  alignItems: 'center',
                  textAlign: 'center',
                  color: "#000000",
                  fontWeight: 700,
                  // lineHeight: "33px",
                  ml: '1px',
                  "@media (max-width:490px)": {
                    fontSize: '20px'
                  }
                }}
              >
                Registration Successful!
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                onClick={submit}
                variant="contained"
                sx={{
                  backgroundColor: '#2970FF',
                  height: '12vh', // Adjust the button height based on viewport height
                  width: '80vw', // Adjust the button width based on viewport width
                  fontSize: '4vw', // Adjust font size based on viewport width
                  fontWeight: 700,
                  borderRadius: '12px',
                  '@media (min-width:600px)': {
                    height: 80, // Set fixed height for screens wider than 600px
                    width: '334px',
                    fontSize: '24px',
                  },
                }}
              >
                Launch Dashboard
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Registered;
