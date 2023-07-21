"use client";
import ArrowLeftIcon from "@untitled-ui/icons-react/build/esm/ArrowLeft";
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
import { baseUrl } from '../BaseUrl';
import Checkbox from '@mui/material/Checkbox';
import Header from '../header/page';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
    useEffect(() => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
    }, []);
    // console.log("baseurl:", baseUrl)
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setNameError('Name is required.');
            return;
        } else {
            setNameError('');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError('Email is required.');
            return;
        } else if (!emailRegex.test(email)) {
            setEmailError('Invalid email format.');
            return;
        } else {
            setEmailError('');
        }

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match.'); // Set the error message
            return;
        } else {
            setPasswordError(''); // Clear the error message if passwords match
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            return;
        } else {
            setPasswordError('');
        }
        if (!/\d/.test(password)) {
            setPasswordError('Password must contain at least one numeric digit.');
            return;
        }
        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        axios.post(`${baseUrl}/api/register`, data, config)
            .then((response) => {
                console.log(response.data); // Handle the successful response
                const { email, _id } = response.data.newUser; // Extract email and _id from the response
        // Store the user email and _id in the local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', _id);
            })
            .catch((error) => {
                console.error(error); // Handle the error
            });
        router.push('/email')

    }
    const onChange = () => {
        console.log("Captcha value:", value);
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
              <SvgIcon sx={{ mr: 1 }}>
                <ArrowLeftIcon />
              </SvgIcon>
              <Typography variant="subtitle2" >Back</Typography>
            </Link>
          </div>
          <Box
            sx={{
              fontSize: 25,
              pb: 4,
              fontWeight: "bold",
              color: "#111927",
              width:'444px'
            }}
          >
            <Typography
              variant="H4"
              sx={{
                fontSize: "32px",
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                lineHeight: "38.4px",
                color: "#111927",
              }}
            >
              Brand account creation
            </Typography>
          </Box>
          <Card
            sx={{
              borderRadius: "16px",
              boxShadow: 2,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: 400,
                p: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  // fontFamily: "Inter",
                }}
              >
                <div>
                  <Typography
                    variant="H6"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      lineHeight: "21.4px",
                      color: "#111927",
                    }}
                  >
                    Register
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography
                      
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "#6C737F",
                      }}
                    >
                      Already have an account? 
                    </Typography>
                    <Typography sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "#2970FF",
                        pl:'4px'
                      }}>Log in</Typography>
                  </Box>
                </div>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3,
                }}
              >
                <form onSubmit={handleSubmit}>
               
                  <TextField
                    fullWidth
                    label="Username"
                    margin="normal"
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                   sx={{borderRadius:'12px'}}

                   />
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
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    margin="normal"
                    name="password"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
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
                                // pb: 2
                            }}
                        // underline="hover"
                        >
                            <SvgIcon sx={{ mr: 1 }}>
                                <ArrowLeftIcon />
                            </SvgIcon>
                            <Typography variant="subtitle2">
                                Back
                            </Typography>
                        </Link>
                    </div>
                    <Box sx={{
                        fontSize: 25,
                        // pb: 4,
                        fontWeight: 'bold',
                        color: "#111927"
                    }}>
                        <h4>Brand account creation</h4>
                    </Box>
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

                  <Box
                    sx={{
                      mt: 2,
                      ml: 2,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Checkbox variant='subtitle2' name="policy" />
                    <Box
                    sx={{
                      mt: 1,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        // fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "#6C737F",
                      }}
                    >
                      I have read the 
                    </Typography>
                    <Typography
                      variant="body1"
                     sx={{
                        fontSize: "16px",
                        // fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "24px",
                        color: "#2970FF",
                        pl:'4px'
                      }}>Terms and Conditions</Typography>
                  </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: 2,
                      ml: 2,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Checkbox variant='subtitle2' name="policy" />
                    <Typography variant="body2" 
                    sx={{fontSize: "14px",
                        // fontFamily: "Inter",
                        fontWeight: 400,
                        lineHeight: "22px",
                        color: "#6C737F",}}>
                      I’m not a robot
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      fullWidth
                      // size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{backgroundColor:'#2970FF',borderRadius:'10px',textDecoration:'none'}}
                    >
                      Register
                    </Button>
                  </Box>
                </form>
              </Box>
              {/* <Divider sx={{ my: 3 }} />
                                }}
                            >
                                <div>
                                    <Typography variant="h4" sx={{ color: "#111927", fontWeight: 'bold' }}>
                                        <h6>Register</h6>
                                    </Typography>
                                    <Box sx={{
                                        // mt: 1,
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            Already have an account?
                                            {' '}
                                            <Link href="/login">
                                                Log in
                                            </Link>
                                        </Typography>
                                    </Box>
                                </div>

                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    // mt: 3
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        margin="normal"
                                        name="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}

                                    />
                                    {nameError && (
                                        <Typography sx={{ color: 'red' }}>
                                            {nameError}
                                        </Typography>
                                    )}
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        margin="normal"
                                        name="email"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && (
                                        <Typography sx={{ color: 'red' }}>
                                            {emailError}
                                        </Typography>
                                    )}
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        margin="normal"
                                        name="password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordError && (
                                        <Typography color="error" variant="body2">
                                            {passwordError}
                                        </Typography>
                                    )}

                                    <TextField
                                        fullWidth
                                        label="Confirm Password"
                                        margin="normal"
                                        name="password"
                                        type="password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                                   
                                    <ReCAPTCHA
                                        sitekey="6LdKOUAnAAAAACtgTJzWt5yXL1mZ4ym08LXtODgw"
                                        onChange={onChange}
                                    />

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
};

export default Register;
