'use client'
import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SocialMedia = () => {

    const router = useRouter();
    const [instagram, setInstagram] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [youtube, setYoutube] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [pinterest, setPinterest] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [blog, setBlog] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            instagram,
            tiktok,
            youtube,
            facebook,
            twitter,
            pinterest,
            linkedin,
            blog,
            userId: user._id
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.post(`${baseUrl}/api/social_handle`, data, config);
            const { newUser, token, msg } = response.data;
            console.log(newUser);
            console.log(token);
            console.log(msg);
            setMessage(msg);
            localStorage.setItem('token', token);
            router.push('/pricing-plan');
        } catch (error) {
            console.error(error); // Handle the error
        }
        finally {
            setIsLoading(false); // Set loading state to false after API call (whether success or error)
        };
    };
    useEffect(() => {
        let userData = localStorage.getItem('user')
        let user1 = JSON.parse(userData)
        setUser(user1)
    }, [])
    return (
        <Box sx={{
            backgroundImage: "url('/image/hero-bg.png')",
            backgroundSize: 'cover', // Adjust the background size as needed
            backgroundPosition: 'center', // Adjust the background position as needed
            py: 4
        }}>
            <Box sx={{ display: 'flex', mt: '20px', justifyContent: 'center' }}>
                <Image alt="Amplify" src="/image/logo2.png" width={125} height={40} />
            </Box>

            <Box
                sx={{
                    width: '693px', // Set width to 100% for responsiveness
                    margin: 'auto',
                    boxShadow: 4,
                    borderRadius: '16px',
                    marginTop: '30px',
                    backgroundColor: '#ffff',
                    px: 8,// Reduce horizontal padding for smaller screens
                    py: 3, // Reduce vertical padding for smaller screens
                    '@media (max-width:490px)': {
                        width: '100%',
                        px: 0,
                    }
                }}
            >
                <Box sx={{
                    p: 2
                }}>
                    <form onSubmit={handleSubmit}>
                        <Typography color="green" sx={{ mt: 1, marginBottom: '15px' }} variant="body1">
                            {message}
                        </Typography>
                        <div>
                            <Typography
                                variant="h4"
                                sx={{
                                    mt: '15px',
                                    marginBottom: '15px',
                                    fontFamily: 'plus jakarta sans',
                                    fontSize: '32px',
                                    color: '#000000',
                                    fontWeight: 700,
                                    fontFamily: 'Plus Jakarta Sans',
                                    lineHeight: '48px',
                                }}
                            >
                                Social media Handles
                            </Typography>
                            <Typography
                                color="text.secondary"
                                sx={{
                                    mt: 1,
                                    marginBottom: '15px',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '27px',
                                }}
                                variant="body1"
                            >
                                Showcase your Brand and social media presence to interested influencers who may want to work with you
                            </Typography>
                        </div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Instagram handle"
                                    name="insta"
                                    type="text"
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="tiktok handle"
                                    name="tiktok"
                                    onChange={(e) => setTiktok(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="youtube handle"
                                    name="youtube"
                                    onChange={(e) => setYoutube(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="facebook handle"
                                    name="facebook"
                                    onChange={(e) => setFacebook(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="twitter handle"
                                    name="twitter"
                                    onChange={(e) => setTwitter(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="pinterest handle"
                                    name="pinterest"
                                    onChange={(e) => setPinterest(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="linkedin handle"
                                    name="linkedin"
                                    onChange={(e) => setLinkedin(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="Blog url" name="blog" onChange={(e) => setBlog(e.target.value)} />
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
    );
};

export default SocialMedia;
