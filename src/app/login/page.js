'use client'
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Link,
    TextField,
    Typography
} from '@mui/material';
import { baseUrl } from '../BaseUrl';
import Checkbox from '@mui/material/Checkbox';
import Header from '../header/page';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
// import Link from 'next/link'

const Login = () => {
    console.log("baseurl:", baseUrl)
    const router = useRouter()
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${baseUrl}/api/login`, { email, password });
            const { user, token } = response.data;

            // Save the token and user data in local storage or cookies for authentication
            // For example:
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // Redirect the user to the dashboard or homepage
            // For example:
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Signin failed:', error.response.data.msg);
            setError(error.response.data.msg);
        }

    }

    return (
        <>
            <Header />
            <Box
                sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'dark'
                        ? 'neutral.800'
                        : 'neutral.100',
                    p: 3
                }}
            >

                <Container maxWidth="xs">
                    <Card sx={{
                        borderRadius: '16px',
                        boxShadow: 2
                    }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: 400,
                                p: 4,

                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontFamily: 'Inter',

                                }}
                            >
                                <div>
                                    <Typography variant="h4" sx={{ color: "#111927", fontWeight: 'bold' }}>
                                        <h6>Login</h6>
                                    </Typography>

                                </div>

                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    mt: 3
                                }}
                            >
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <form onSubmit={handleSubmit}>

                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        margin="normal"
                                        name="email"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        margin="normal"
                                        name="password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Box sx={{
                                        mt: 2, ml: 2,
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <Checkbox name="policy" />
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            I have read the
                                            {' '}
                                            <Link href="#">
                                                Terms and Conditions
                                            </Link>
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        mt: 2, ml: 2,
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <Checkbox name="policy" />
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            I’m not a robot

                                        </Typography>
                                    </Box>

                                    <Box sx={{ mt: 2 }}>
                                        <Button
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"

                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
};

export default Login