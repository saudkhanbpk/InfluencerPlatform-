'use client'
import { Box, Button,Typography } from '@mui/material'
import { baseUrl } from '../BaseUrl';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation'



const Greate = () => {
    console.log("baseurl:", baseUrl)
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    useEffect(() => {

        const currentURL = window.location.href;

        // Parse the URL to get the query parameters
        const url = new URL(currentURL);
        const id = url.searchParams.get('id');

        if (id) {
            handleVerify(id)
        }

    }, [])

    const handleVerify = (id) => {
        setLoading(true)
        let data = { _id: id }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        axios.post(`${baseUrl}/api/user_verify`, data, config)
            .then((response) => {
                setLoading(false)
                console.log(response.data);
                // Handle the successful response
            })
            .catch((error) => {
                setLoading(false)
                console.error(error); // Handle the error
            });

    }
    const getStart = () => {
        router.push('/general-information')
    }

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    mt: 10,

                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                    }}
                >
                    <Image
                        alt="Amplify"
                        src="/image/logo2.png"
                        width={125}
                        height={40}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    mt:3
                    
                }}
            >
                <Box
                    sx={{
                        backgroundColor: (theme) => theme.palette.mode === 'dark'
                            ? 'neutral.800'
                            : 'neutral.100',
                        p: 3,
                        display: 'flex',
                        marginX: 'auto',
                        justifyContent: 'center',
                        alignItems: "center",
                        color: '#111927',
                        backgroundColor: '#ffff',
                        borderRadius: '16px',
                        boxShadow: 1,
                        width: '50%',
                        p: 3,
                        mt: 3
                    }}>
                    <Box>
                        <Box>
                            <Typography sx={{fontWeight: 700,
                                fontSize: 32, lineHeight:'48px',fontFamily:'Plus Jakarta Sans',color:'#000000'}}>Great News!<br />Your brand has registered</Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#6C737F',
                                mt: 3
                            }}
                        >
                            <p>Let’s complete your profile and start connecting with<br /> potential Influencers</p>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                            }}>
                            <Box
                                sx={{
                                    mt: 3,
                                }}>
                                <Button sx={{ width: '250px',borderRadius:'10px' }} variant="contained" onClick={getStart}>Get started</Button>
                            </Box>
                            <Box
                                sx={{
                                    mt: 3,
                                }}>
                                <Button sx={{ ml: 3,borderRadius:'10px' }} variant="outlined">do it later</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ml:2}}>
                        <Image
                            src='/image/great.png'
                            width={192.02}
                            height={232.53}
                        />
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Greate
