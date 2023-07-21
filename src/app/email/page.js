"use client";
import { Box, Button,Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const confirEmail = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 20,
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="Amplify"
              src="/image/logo.png"
              width={125}
              height={40}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#111927",
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "Plus Jakarta Sans",
                lineHeight: "38.4px",
              }}
            >
              Confirm your email address
            </Typography>
          </Box>
          <Box
            sx={{
              color: "#6C737F",
              mt: 3,
              fontSize: 18,
            }}
          >
            <p>Please verify your email address by clicking the link sent to</p>
          </Box>
          <Box
            sx={{
              color: "#111927",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight:500
            }}
          >
            <p>john.doe@gmail.com</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button variant="contained" color="primary" sx={{backgroundColor:'#2970FF',borderRadius:'10px',textDecoration:'none'}}>
              Resend verification link
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default confirEmail;
