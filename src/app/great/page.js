// 'use client'
// import { Box, Button, Typography,CircularProgress  } from '@mui/material'
// import { baseUrl } from '../BaseUrl';
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useRouter } from 'next/navigation'



// const Greate = () => {
//     console.log("baseurl:", baseUrl)
//     const router = useRouter()

//     const [loading, setLoading] = useState(false)
//     useEffect(() => {

//         const currentURL = window.location.href;

//         // Parse the URL to get the query parameters
//         const url = new URL(currentURL);
//         const id = url.searchParams.get('id');

//         if (id) {
//             handleVerify(id)
//         }

//     }, [])

//     const handleVerify = (id) => {
//         setLoading(true)
//         let data = { _id: id }
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         };
//         axios.post(`${baseUrl}/api/user_verify`, data, config)
//             .then((response) => {
//                 setLoading(false)
//                 console.log(response.data);
//                 // Handle the successful response
//             })
//             .catch((error) => {
//                 setLoading(false)
//                 console.error(error); // Handle the error
//             });

//     }
//     const getStart = () => {
//         router.push('/general-information')
//     }

//     return (
//         <Box>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: "center",
//                     mt: 10,

//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: "center",
//                     }}
//                 >
//                     <Image
//                         alt="Amplify"
//                         src="/image/logo2.png"
//                         width={125}
//                         height={40}
//                     />
//                 </Box>
//             </Box>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     // justifyContent: 'space-between',
//                     mt: 3

//                 }}
//             >
//                 <Box
//                     sx={{
//                         backgroundColor: (theme) => theme.palette.mode === 'dark'
//                             ? 'neutral.800'
//                             : 'neutral.100',
//                         p: 3,
//                         display: 'flex',
//                         marginX: 'auto',
//                         justifyContent: 'center',
//                         alignItems: "center",
//                         color: '#111927',
//                         backgroundColor: '#ffff',
//                         borderRadius: '16px',
//                         boxShadow: 1,
//                         width: '50%',
//                         p: 3,
//                         mt: 3
//                     }}>
//                     <Box>
//                         <Box>
//                             <Typography sx={{
//                                 fontWeight: 700,
//                                 fontSize: 32, lineHeight: '48px', fontFamily: 'Plus Jakarta Sans', color: '#000000'
//                             }}>Great News!<br />Your brand has registered</Typography>
//                         </Box>
//                         <Box
//                             sx={{
//                                 color: '#6C737F',
//                                 mt: 3
//                             }}
//                         >
//                             <p>Let’s complete your profile and start connecting with<br /> potential Influencers</p>
//                         </Box>
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                             }}>
//                             <Box
//                                 sx={{
//                                     mt: 3,
//                                 }}>
//                                 <Button sx={{ width: '250px', borderRadius: '10px' }} variant="contained" onClick={getStart}>Get started</Button>
//                             </Box>
//                             <Box
//                                 sx={{
//                                     mt: 3,
//                                 }}>
//                                 <Button sx={{ ml: 3, borderRadius: '10px' }} variant="outlined">do it later</Button>
//                             </Box>
//                         </Box>
//                     </Box>
//                     <Box sx={{ ml: 2 }}>
//                         <Image
//                             src='/image/great.png'
//                             width={192.02}
//                             height={232.53}
//                         />
//                     </Box>

//                 </Box>
//             </Box>
//         </Box>
//     )
// }

// export default Greate


'use client'
import { Box, Button, Typography, CircularProgress } from '@mui/material'
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
        <Box
            sx={{
                backgroundImage: "url('/image/hero-bg.png')",
                backgroundSize: 'cover', // Adjust the background size as needed
                backgroundPosition: 'center', // Adjust the background position as needed
                py: 13
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // mt: 10,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    mt: 3,
                    flexDirection: 'column', // Mobile responsiveness
                    alignItems: 'center', // Mobile responsiveness
                }}
            >
                <Box
                    sx={{
                        backgroundColor: (theme) => theme.palette.mode === 'dark'
                            ? 'neutral.800'
                            : 'neutral.100',
                        p: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#111927',
                        backgroundColor: '#ffff',
                        borderRadius: '16px',
                        boxShadow: 1,
                        width: '50%',
                        p: 3,
                        mt: 3,
                        '@media (max-width: 800px)': { // Tablet responsiveness
                            width: '90%',
                        },
                        '@media (max-width: 600px)': { // Mobile responsiveness
                            width: '90%', // Adjusting width for mobile
                            flexDirection: 'column', // Changing to column layout for mobile
                            justifyContent: 'center', // Centering content for mobile
                            alignItems: 'center', // Centering content for mobile
                        },
                    }}
                >
                    <Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 32,
                                    lineHeight: '48px',
                                    fontFamily: 'Plus Jakarta Sans',
                                    color: '#000000',
                                    textAlign: 'center', // Center text for mobile
                                    '@media (min-width: 600px)': {
                                        textAlign: 'start', // Align text to the start (left) for desktop
                                        // pl:'20px'
                                    },
                                }}
                            >
                                Great News!<br />Your brand has registered
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                color: '#6C737F',
                                mt: 3,
                                textAlign: 'center', // Center text for mobile
                                '@media (min-width: 600px)': {
                                    textAlign: 'start', // Align text to the start (left) for desktop
                                    // pl:'5px'
                                },
                            }}
                        >
                            <p>
                                Let’s complete your profile and start connecting with<br /> potential Influencers
                            </p>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column', // Default to column layout for mobile
                                '@media (min-width: 600px)': {
                                    flexDirection: 'row', // Change to row layout for desktop and tablet
                                    //    pl:'10px'
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    mt: 3,
                                    width: '100%', // Set width to 100% for mobile to make it a block
                                    '@media (min-width: 600px)': {
                                        width: 'auto', // Reset width to auto for desktop to make it a flex item
                                        marginRight: '10px', // Add margin between buttons for desktop
                                    },
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%', // Set width to 100% for mobile to fill the container
                                        borderRadius: '10px',
                                        '@media (min-width: 600px)': {
                                            width: '200px', // Set width to 250px for desktop
                                        },
                                    }}
                                    variant="contained"
                                    onClick={getStart}
                                >
                                    Get started
                                </Button>
                            </Box>
                            <Box
                                sx={{
                                    mt: 3,
                                    width: '100%', // Set width to 100% for mobile to make it a block
                                    '@media (min-width: 600px)': {
                                        width: 'auto', // Reset width to auto for desktop to make it a flex item
                                    },
                                }}
                            >
                                <Button
                                    sx={{
                                        width: '100%', // Set width to 100% for mobile to fill the container
                                        borderRadius: '10px',
                                        '@media (min-width: 600px)': {
                                            width: '200px', // Set width to 250px for desktop
                                        },
                                    }}
                                    // sx={{ ml: 3 }}
                                    variant="outlined"
                                >
                                    do it later
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            ml: 2,
                            mt: 3, // Adjusting margin for mobile
                            display: 'flex',
                            justifyContent: 'center', // Mobile responsiveness
                        }}
                    >
                        <Image
                            src='/image/great.png'
                            width={192.02}
                            height={232.53}
                        />
                    </Box>
                </Box>
            </Box>
            {loading && ( // Show loading indicator when loading is true
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh', // Center the loading indicator
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
        </Box>
    )
}

export default Greate;

