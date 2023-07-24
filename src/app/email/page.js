'use client'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'; 

const confirEmail = () => {
    const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Fetch the user email from local storage on component mount
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
  }, []);
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    mt: 20,

                }}
            >
                <div>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
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
                            color: '#111927',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 'bold',
                            mt: 3,
                            fontSize:32

                        }}
                    >
                        <h4>Confirm your email address</h4>
                    </Box>
                    <Box
                        sx={{
                            color: '#6C737F',
                            mt: 3,
                            fontSize:18
                        }}
                    >
                        <p>Please verify your email address by clicking the link sent to
                        </p>

                    </Box>
                    <Box
                        sx={{
                            color: '#111927',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize:18
                        }}
                    >
                        <p>{userEmail}</p>
                    </Box>
                    <Box
                    sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            mt:3,
                            
                        }}
                    >
                        <Button variant="contained" color="primary">
                            Resend verification link
                        </Button>
                    </Box>
                </div>

            </Box>
        </div>
        ////////
    )
}

export default confirEmail
