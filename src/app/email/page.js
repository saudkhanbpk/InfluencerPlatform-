'use client'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { baseUrl } from "../BaseUrl";
import axios from 'axios';
const confirEmail = () => {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Fetch the user email from local storage on component mount
        const email = localStorage.getItem('userEmail');
        console.log('Stored email:', email); // Add this line to see the retrieved value
        setUserEmail(email); // Set the user email to the state variable
    }, []);

    const handleResendVerification = async () => {
        try {
            const response = await axios.post(`${baseUrl}/api/resend_verify`, { userEmail });

            if (response.status === 200) {
                // Handle success, you can show a success message or perform any other action
                console.log('Verification link resent successfully');
            } else {
                // Handle error, you can show an error message or perform any other action
                console.error('Failed to resend verification link');
            }
        } catch (error) {
            console.error('Failed to resend verification link:', error);
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: "url('/image/hero-bg.png')",
                backgroundSize: 'cover', // Adjust the background size as needed
                backgroundPosition: 'center', // Adjust the background position as needed
                py: 8
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: [5, 13], // Responsive margin top for mobile and tablet
                }}
            >
                <Image
                    alt="Amplify"
                    src="/image/logo2.png"
                    width={125}
                    height={40}
                />
            </Box>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 4,
                        lineHeight: "38.4px",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#111927",
                            fontSize: ["24px", "32px"], // Responsive font size for mobile and tablet
                            fontWeight: "600",
                            fontFamily: "Plus Jakarta Sans",
                            alignItems: "center",
                            lineHeight: "38.4px",
                            textAlign: 'center'
                        }}
                    >
                        Confirm your email address
                    </Typography>
                </Box>

                <Box>
                    <Box
                        sx={{
                            color: '#6C737F',
                            mt: 5,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: "18.26px", textAlign: 'center' }}>
                            Please verify your email address by clicking the link sent to
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            color: '#111927',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 18,
                        }}
                    >
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, lineHeight: "18.26px", mt: '30px', textAlign: 'center' }}>
                            {userEmail}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            mt: 5,
                        }}
                    >
                        <Button
                            onClick={handleResendVerification}
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: '#2970FF',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                width: ['80%', '30%'], // Responsive width for mobile and tablet
                            }}
                        >
                            Resend verification link
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default confirEmail;
