'use client'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Greate = () => {
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
            </Box>
            <div
                sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
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
                        <Box
                            sx={{
                                fontWeight: "bold",
                                fontSize: 25,

                            }}
                        >
                            <h4>Great News!<br />Your brand has registered</h4>
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
                                <Button sx={{width:'250px'}} variant="contained">Get started</Button>
                            </Box>
                            <Box
                                sx={{
                                    mt: 3,
                                }}>
                                <Button sx={{width:'120px', ml:3}} variant="outlined">do it later</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Image
                            src='/image/great.png'
                            width={192.02}
                            height={232.53}
                        />
                    </Box>

                </Box>
            </div>
        </div>
    )
}

export default Greate
