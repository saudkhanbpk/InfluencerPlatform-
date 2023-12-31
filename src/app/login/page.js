"use client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { baseUrl } from "../BaseUrl";
import Checkbox from "@mui/material/Checkbox";
import Header from "../header/page";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
// import Link from 'next/link'

const Login = () => {
  console.log("baseurl:", baseUrl);
  const router = useRouter();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });
      const { user, token } = response.data;

      // Save the token and user data in local storage or cookies for authentication
      // For example:
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success('Login successful!', { autoClose: 4000 });
      // Redirect the user to the dashboard or homepage
      // For example:
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Signin failed:", error.response.data.msg);
      setError(error.response.data.msg);
    } finally {
      setIsLoading(false); // Set loading state to false after API call (whether success or error)
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
          p: 3,
        }}
      >
        <Container maxWidth="xs">
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
                  justifyContent: "space-between",
                  fontFamily: "Inter",
                }}
              >
                <div>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      lineHeight: "21.4px",
                      color: "#111927",
                    }}
                  >
                    Login
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3,
                }}
              >
                {error && <p style={{ color: "red" }}>{error}</p>}
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
                  <Box
                    sx={{
                      mt: 2,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Checkbox name="policy" />
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
                        pl: '4px'
                      }}>Terms and Conditions</Typography>
                  </Box>
                  <Box sx={{ mt: 7 }}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ backgroundColor: '#2970FF', borderRadius: '10px', textDecoration: 'none' }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Login"} {/* Display "Loading..." while loading */}
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

export default Login;
