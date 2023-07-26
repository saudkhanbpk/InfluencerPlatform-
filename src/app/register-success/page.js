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
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Box>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="Amplify"
              src="/image/logo2.png"
              width={125}
              height={40}
            />
          </Box> */}

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
              width: "350px",
              margin: "auto",
              borderRadius: "16px",
              marginTop: "30px",
              backgroundColor: "#F9FAFF",
              justifyContent: "center",
              justifyItems: "center",
              p: 5,
              marginBottom: '40px'
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
                  color: "#000000",
                  fontWeight: 700,
                  lineHeight: "33px",
                  ml: '1px'
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
              <Button onClick={submit} variant="contained" sx={{ backgroundColor: '#2970FF', height: 80, width: '334px', fontSize: '24px', fontWeight: 700, borderRadius: '12px' }}>
                Launch Dashboard
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Registered;
