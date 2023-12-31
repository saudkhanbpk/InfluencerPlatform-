'use client'
import React, { useEffect } from 'react';
import { Box, Button, Switch, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation'
const GeneralInfo = () => {
    const router = useRouter()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [companyname, setCompanyname] = useState('')
    const [companywebsite, setCompanywebsite] = useState('')
    const [companyaddress, setCompanyaddress] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState("")

    console.log("user :", user)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true);
        const data = {
            fname,
            lname,
            phone,
            companyname,
            companywebsite,
            companyaddress,
            userId: user._id,
        };
        // return console.log(data)
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        axios.post(`${baseUrl}/api/general_info`, data, config)
            .then((response) => {
                router.push('/company-information')
                console.log(response.data);
                const { newUser, token, msg } = response.data;
                console.log(newUser);
                console.log(token);
                console.log(msg);
                setMessage(msg);
                localStorage.setItem('token', token);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false after API call (whether success or error)
            });

    }
    useEffect(() => {
        let userData = localStorage.getItem('user');
        if (userData) {
            try {
                let user1 = JSON.parse(userData);
                setUser(user1);
            } catch (error) {
                console.error('Error parsing user data:', error);
                setUser(null); // Set user to null in case of parsing error
            }
        }
    }, []);

    // useEffect(() => {
    //     let userData = localStorage.getItem('user')
    //     let user1 = JSON.parse(userData)
    //     setUser(user1)
    // }, [])
    return (
        <Box sx={{
            backgroundImage: "url('/image/hero-bg.png')",
            backgroundSize: 'cover', // Adjust the background size as needed
            backgroundPosition: 'center', // Adjust the background position as needed
            py: 4
        }}>
            <Box sx={{ display: "flex", justifyContent: 'center' }}>
                <img
                    alt="Amplify"
                    src="/image/logo2.png"
                    style={{ maxWidth: '150px', width: '100%' }}
                />
            </Box>

            <Box sx={{
                width: '100%',
                margin: 'auto',
                boxShadow: '4',
                borderRadius: '16px',
                marginTop: '30px',
                backgroundColor: "#ffff",
                '@media (min-width: 768px)': {
                    width: '50%', // Change width to 50% on desktop screens
                    mt: '50px', // Add top margin on desktop screens
                    px: 5,
                    py: 3,
                }
            }}>
                <Box sx={{
                    p: 2
                }}>

                    <form onSubmit={handleSubmit}>
                        <Typography
                            sx={{ mt: 1, marginBottom: '15px' }}
                            variant="body1"
                            color="green"
                        >
                            {message}
                        </Typography>
                        <div>
                            <Typography variant="h4" sx={{ marginTop: '15px', marginBottom: '25px', fontFamily: 'plus jakarta sans', fontSize: '32px', color: '#000000', fontWeight: 700, fontFamily: 'Plus Jakarta Sans', lineHeight: '48px' }}>
                                General Business Information
                            </Typography>
                        </div>
                        <Grid
                            container
                            spacing={{ xs: 1, md: 3 }}
                        >
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="fname"
                                    type='text'
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="lname"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Company Name"
                                    name="cname"
                                    value={companyname}
                                    onChange={(e) => setCompanyname(e.target.value)}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Company Website"
                                    name="cwebsite"
                                    value={companywebsite}
                                    onChange={(e) => setCompanywebsite(e.target.value)}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Company Address"
                                    name="caddress"
                                    value={companyaddress}
                                    onChange={(e) => setCompanyaddress(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', flexDirection: { xs: 'column', md: 'row' } }}>
                            <Button sx={{ p: 1, borderRadius: '12px', color: '#111927', mb: { xs: 2, md: 0 }, width: { xs: '100%', md: 'auto' } }} type="reset">
                                Cancel
                            </Button>
                            <Button
                                sx={{ ml: { xs: 0, md: 2 }, px: { xs: 1, md: 5 }, p: 2, borderRadius: '12px', bgcolor: '#2970FF', color: '#FFFFFF', fontWeight: 600, }}
                                disabled={isLoading} // Disable the button while loading
                                type="submit"
                                variant="contained"
                            >
                                {isLoading ? "Loading..." : " Save changes and NEXT"} {/* Display "Loading..." while loading */}

                            </Button>
                        </Box>

                    </form>
                </Box>
            </Box>
        </Box>
    )
};

export default GeneralInfo;
