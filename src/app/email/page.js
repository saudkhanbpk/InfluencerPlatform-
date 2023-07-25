'use client'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'; 

const confirEmail = () => {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Fetch the user email from local storage on component mount
        const email = localStorage.getItem('userEmail');
        console.log('Stored email:', email); // Add this line to see the retrieved value
        setUserEmail(email); // Set the user email to the state variable
      }, []);
//   console.log("email testing",userEmail )
    return (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt:13
              
            }}
          >
            <Image
              alt="Amplify"
              src="/image/logo2.png"
              width={125}
              height={40}
            />
          </Box>
          <Box
            
          >
          <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
              lineHeight: "38.4px",

            }}>
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
            
                <Box>
                    
                    <Box
                        sx={{
                            color: '#6C737F',
                            mt: 5,
                            
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography sx={{fontSize:'18px',fontWeight:400,lineHeight:"18.26px",textAlign:'center'}}>
                        Please verify your email address by clicking the link sent to
                        </Typography>
                        

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
                        <Typography sx={{fontSize:'18px',fontWeight:500,lineHeight:"18.26px",textAlign:'center'}}>{userEmail}</Typography>
                    </Box>
                    <Box
                    sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            mt:5,
                            
                        }}
                    >
                        <Button variant="contained" color="primary"  sx={{backgroundColor:'#2970FF',borderRadius:'10px',textDecoration:'none',width:'30%'}}>
                            Resend verification link
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
        ////////
    )
}

export default confirEmail;
