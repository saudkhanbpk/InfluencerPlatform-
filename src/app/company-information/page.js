'use client';
import { Box, Button, TextField, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../BaseUrl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CompanyInfo = () => {
    const router = useRouter();
    const [niche, setNiche] = useState('');
    const [budget, setBudget] = useState('');
    const [companysize, setCompanysize] = useState('');
    const [companyfounded, setCompanyfounded] = useState('');
    const [bio, setBio] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState("")


    const handelSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            niche,
            budget,
            companysize,
            companyfounded,
            bio,
            userId: user._id
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.post(`${baseUrl}/api/company_info`, data, config);
            router.push('/social-handle');
            const { newUser, token, msg } = response.data;
            setMessage(msg);
            localStorage.setItem('token', token);
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
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Image alt="Amplify" src="/image/logo2.png" width={125} height={40} />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    margin: 'auto',
                    boxShadow: '4',
                    borderRadius: '16px',
                    marginTop: '30px',
                    backgroundColor: "#ffff",
                    boxShadow: '4',
                    '@media (min-width: 768px)': {
                        width: '50%', // Change width to 50% on desktop screens
                        mt: '50px', // Add top margin on desktop screens
                        px: 5,
                        py: 2,
                    }
                }}
            >
                <Box sx={{
                    p: 2
                }}>
                    <form onSubmit={handelSubmit}>
                        <Typography
                            sx={{ mt: 1, mb: 2 }}
                            variant="body1"
                            color="green"
                        >
                            {message}
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 0, mb: 3, fontFamily: 'Plus Jakarta Sans', fontSize: '32px', fontWeight: 700 }}>
                            General Business Information
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Niche category"
                                    name="niche"
                                    type="text"
                                    onChange={(e) => setNiche(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Budget"
                                    name="budget"
                                    onChange={(e) => setBudget(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Company size"
                                    name="csize"
                                    onChange={(e) => setCompanysize(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Company founded"
                                    name="cfound"
                                    onChange={(e) => setCompanyfounded(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    name="message"
                                    label="Bio"
                                    multiline
                                    rows={3}
                                    onChange={(e) => setBio(e.target.value)}
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
    );
};

export default CompanyInfo;
