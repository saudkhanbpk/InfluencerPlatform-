'use client'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Registered = () => {
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
 <Box sx={{ width: '100%',margin:'auto',borderRadius:'16px',marginTop:'30px',
    backgroundColor:"#F9FAFF",
            px: 7,py:5}}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}
                    >
                        <Image
                            alt="Amplify"
                            src="/image/register-log.png"
                            width={135}
                            height={50}
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
                            fontSize:20

                        }}
                    >
                        <p>Registration Successful!</p>
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
                            Launch Dashboard
                        </Button>
                    </Box>
   </Box>
                </div>

            </Box>
        </div>
    )
}

export default Registered