'use client'
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    SvgIcon,
    Link,
    TextField,
    Typography
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Header from '../header/page';
import { useRouter } from 'next/navigation'


const Register = () => {
    const router = useRouter();

    const handleNavigate = 
    () => {
        router.push('/')
    }
    return(

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
                <div>
                    <Link 
                        color="text.primary"
                        // component={RouterLink}
                        // href={paths.index}
                        sx={{
                            alignItems: 'center',
                            display: 'inline-flex',
                            color: '#111927',
                            pb: 2
                        }}
                    // underline="hover"
                    >
                        <SvgIcon sx={{ mr: 1 }}>
                            <ArrowLeftIcon />
                        </SvgIcon>
                        <Typography variant="subtitle2" onClick={handleNavigate}>
                            Back
                        </Typography>
                    </Link>
                </div>
                <Box sx={{
                    fontSize: 25,
                    pb: 4,
                    fontWeight: 'bold',
                    color: "#111927"
                }}>
                    <h4>Brand account creation</h4>
                </Box>
                <Card sx={{
                    borderRadius: '16px',
                    boxShadow: 4
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
                                    <h6>Register</h6>
                                </Typography>
                                <Box sx={{
                                    mt: 1,
                                    alignItems: 'center',
                                    display: 'flex',
                                }}>
                                    <Typography
                                        color="text.secondary"
                                        variant="body2"
                                    >
                                        Already have an account?
                                        {' '}
                                        <Link href="#">
                                            Log in
                                        </Link>
                                    </Typography>
                                </Box>
                            </div>

                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                mt: 3
                            }}
                        >
                            <form onSubmit={(event) => event.preventDefault()}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    name="name"
                                    type="text"
                                />
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    type="password"
                                />
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    margin="normal"
                                    name="password"
                                    type="password"
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
                                        Register
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        {/* <Divider sx={{ my: 3 }} />
                    <Link
                        color="text.secondary"
                        href="#"
                        variant="body2"
                    >
                        Create new account
                    </Link> */}
                    </CardContent>
                </Card>
            </Container>
        </Box>
    </>
);
}
export default Register