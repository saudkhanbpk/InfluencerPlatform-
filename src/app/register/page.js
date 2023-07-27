"use client";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArrowLeftIcon from "@mui/icons-material/ArrowBack";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { baseUrl } from "../BaseUrl";
import Checkbox from "@mui/material/Checkbox";
import Header from "../header/page";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Register = () => {
    const theme = useTheme();
    const sMobile = useMediaQuery(theme.breakpoints.down("xs"));
    useEffect(() => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userId");
    }, []);

    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState('')
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // if (!name.trim()) {
        //     setNameError("Name is required.");
        //     return;
        // } else {
        //     setNameError("");
        // }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError("Email is required.");
            return;
        } else if (!emailRegex.test(email)) {
            setEmailError("Invalid email format.");
            return;
        } else {
            setEmailError("");
        }

        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        } else {
            setPasswordError("");
        }
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
            return;
        } else {
            setPasswordError("");
        }
        if (!/\d/.test(password)) {
            setPasswordError("Password must contain at least one numeric digit.");
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios
            .post(`${baseUrl}/api/register`, data, config)
            .then((response) => {
                console.log(response.data);
                const { email, _id } = response.data.newUser;
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userId", _id);
                toast.success('Registration successful!', { autoClose: 7000 });
                router.push("/email");
            })
            .catch((error) => {
                console.error(error.response.data.msg);
                toast.error(error.response.data.msg);
                setError(error.response.data.msg);
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false after API call (whether success or error)
            });
    };

    const onChange = () => {
        console.log("Captcha value:", value);
    };
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the screen width threshold according to your needs
    };
    useEffect(() => {
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return (
        <>
            <Header />
            <Box
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
                    p: 0,
                }}
            >
                <Container maxWidth="xs">
                    <Box
                        sx={{
                            fontSize: 25,
                            pb: 4,
                            fontWeight: "bold",
                            color: "#111927",
                        }}
                    >
                        <Typography
                            variant="h4"
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
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Link
                                        color="text.primary"
                                        href="#"
                                        sx={{
                                            alignItems: "center",
                                            display: "inline-flex",
                                            color: "#111927",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <ArrowLeftIcon sx={{ mr: 1 }} />
                                        <Typography variant="subtitle2" sx={{}}>
                                            Back
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: "18px",
                                            fontFamily: "Plus Jakarta Sans",
                                            fontWeight: 700,
                                            lineHeight: "21.6px",
                                            color: "#111927",
                                        }}
                                    >
                                        Register
                                    </Typography>
                                    <Box
                                        sx={{
                                            // alignItems: "center",
                                            display: "flex",
                                            flexDirection: "column",
                                            marginBottom: "5px",

                                            // Responsive styles
                                            "@media (max-width: 600px)": {
                                                alignItems: "start",
                                                display: "block",
                                            },
                                        }}
                                    >
                                        <Box sx={{
                                            "@media (max-width: 600px)": {
                                                display: 'block',
                                                alignItems: 'center'
                                            },
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 400,
                                                    lineHeight: "22px",
                                                    color: "#6C737F",
                                                    mt: 2,

                                                    // Responsive styles
                                                    "@media (max-width: 600px)": {
                                                        textAlign: "left",
                                                    },
                                                }}
                                            >
                                                Already have an account?
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: 400,
                                                    lineHeight: "24px",
                                                    color: "#2970FF",
                                                    pl: "4px",
                                                    mt: 2,

                                                    // Responsive styles
                                                    "@media (max-width: 600px)": {
                                                        textAlign: "left",
                                                        paddingLeft: "0", // Remove padding on the left side
                                                        marginTop: "8px", // Increase the top margin for better spacing
                                                    },
                                                }}
                                            >
                                                <Link href="/login" sx={{ textDecoration: "none" }}>
                                                    Log in
                                                </Link>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ flexGrow: 1 }}>
                                <form onSubmit={handleSubmit}>
                                    {error && <p style={{ color: "red" }}>{error}</p>}
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        margin="normal"
                                        name="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {nameError && (
                                        <Typography sx={{ color: "red" }}>{nameError}</Typography>
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
                                        <Typography sx={{ color: "red" }}>{emailError}</Typography>
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
                                    <Box
                                        sx={{
                                            mt: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            "@media(max-width:490px)": {
                                                display: 'block',
                                                alignItems: 'center'
                                            },
                                        }}
                                    >
                                        <Box sx={{
                                            "@media(max-width:490px)": {
                                                display: 'flex',
                                                alignItems: 'center'
                                            },
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <Checkbox name="policy" />
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: "14px",
                                                    fontWeight: 400,
                                                    lineHeight: "22px",
                                                    color: "#6C737F",
                                                }}
                                            >
                                                I have read the
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 400,
                                                lineHeight: "24px",
                                                color: "#2970FF",
                                                pl: "4px",
                                            }}
                                        >
                                            <Link href="#" sx={{ textDecoration: "none" }}>
                                                Terms and Conditions
                                            </Link>
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            mt: 2,
                                            transform: "scale(0.77)",
                                            transformOrigin: "0 0",
                                        }}
                                    >
                                        <ReCAPTCHA
                                            sitekey="6LdKOUAnAAAAACtgTJzWt5yXL1mZ4ym08LXtODgw"
                                            onChange={onChange}
                                        // size={isMobile ? "compact" : "normal"}
                                        />
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Button
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                backgroundColor: "#2970FF",
                                                borderRadius: "10px",
                                                textDecoration: "none",
                                            }}
                                            disabled={isLoading} // Disable the button while loading
                                        >
                                            {isLoading ? "Loading..." : "Register"} {/* Display "Loading..." while loading */}
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
            <ToastContainer />
        </>
    );
};

export default Register;