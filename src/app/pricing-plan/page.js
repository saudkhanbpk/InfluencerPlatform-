"use client";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";
import { baseUrl, publishable_Key } from '../BaseUrl';
import Image from "next/image";
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Route } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { FcCheckmark } from 'react-icons/fc';
const MySwal = withReactContent(Swal);
const Registered = () => {
  const router = useRouter();
  const publishableKey = "pk_test_51MW0sqA2UHtqGNuRS86jXELMgiNsywnlNaLJ1isdCq7yXbfvWKL2FisKTYAVPmBS4XY9EO4m0JRGOIELoiVnDThN00cq9qWeCS"
  // console.log(publishableKey)
  '';
  const [product, setProduct] = useState({
    name: 'Headphone',
    price: 99,
  });
  const priceForStripe = product.price * 100;

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
    router.push('/register-success')
  };

  const submit = () => {
    router.push('/register-success')
  }
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const billingDetails= async(token)=>{
    console.log("ksdgjfgsdhkf")
    const data = {
      cardNumber: token.card.last4,
      cardHolderName:token.card.name,
      country: token.card.country,
      zipCde: token.card.address_zip,
  };
let payload={billingDetails:data}
console.log("data--------", payload)
  const config = {
      headers: {
          "Content-Type": "application/json",
      },
  };
  let user = JSON.parse(localStorage.getItem('user'))
   console.log("userData", user._id)
    axios.put(`${baseUrl}/api/updateBillingDetails/${user._id}`, payload, config)
            .then((response) => {
                console.log("ser response", response.data);
                // const { email, _id } = response.data.newUser;
            })
            .catch((error) => {
                console.error(error.response.data.msg);
                toast.error(error.response.data.msg);
                setError(error.response.data.msg);
            })

  }
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:5001/api/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
        await  billingDetails(token)
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          mt: "50px",
          justifyContent: "center",
          mb: "10px",
        }}
      >
        <Image alt="Amplify" src="/image/logo2.png" width={125} height={40} />
      </Box>
      <Grid container spacing={2} justifyContent="center" >
        <Grid
          sx={{
            '@media (min-width:768px)': {
              mr: 3
            }
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderRadius: "16px",
              mt: "30px",
              backgroundColor: "#F9FAFF",
              p: 2,
            }}
          >
            <Box sx={{ width: '24', height: '25px' }}>
              <Image
                sx={{ position: "absolute" }}
                alt="Amplify"
                src="/image/pricelogo.png"
                width={24}
                height={26}
              />

            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  marginTop: "6px",
                  marginBottom: "2px",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: '38px'
                }}
              >
                0$
              </Typography>
              <Box sx={{ my: '6px' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "2px",
                    lineHeight: '22px'
                  }}
                >
                  Free trial
                </Typography>

              </Box>

            </Box>
            <Box sx={{ my: '6px' }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#6C737F",
                  fontFamily:'Plus Jakarta Sans'
                }}
              >
                to familiarize yourself with our tools
              </Typography>

            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />

                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                </Box>
                <FcCheckmark />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (limited)
                </Typography>
              </Box>

            </Box>

            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                mt: 4,
                mb: 2,
              }}
            >
              <Button
                onClick={submit}
                variant="outlined"
                color="primary"
                sx={{
                  width: "90%",
                  color: "#6366F1",
                  border: "1px solid #6366F1",
                  borderRadius: "10px",
                }}
              >
                Start free Trial
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            '@media (min-width:768px)': {
              ml: 3
            }
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderRadius: "16px",
              mt: "30px",
              backgroundColor: "#F9FAFF",
              p: 2,
            }}
          >
            <Box sx={{ width: '24', height: '25px' }}>
              <Image
                sx={{ position: "absolute" }}
                alt="Amplify"
                src="/image/pricelogo.png"
                width={24}
                height={26}
              />

            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  marginTop: "6px",
                  marginBottom: "2px",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: '38px'
                }}
              >
                $99
                <Typography
                  variant="body"
                  sx={{ fontSize: "14px", color: "#6C737F" }}
                >
                  /mo
                </Typography>
              </Typography>

            </Box>

            <Box sx={{}}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "700",
                  fontSize: "18px",
                  marginBottom: "2px",
                  lineHeight: '22px'
                }}
              >
                Standard
              </Typography>

            </Box>


            <Box sx={{ my: '6px' }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#6C737F",
                  fontFamily:'Plus Jakarta Sans'
                }}
              >
                to familiarize yourself with our tools
              </Typography>

            </Box>

            <Divider sx={{ my: 2 }} />


            <Box>
              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
                <Box sx={{ alignItems: 'center' }} >
                  {/* <Image
                  alt="Amplify"
                  src="/image/icon.png"
                  width={16}
                  height={14}
                /> */}
                  <FcCheckmark />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", ml: 2, fontWeight: 400, lineHeight: '22px', color: '#111927' }}
                >
                  Access to influencer Analyzer (full)
                </Typography>
              </Box>

            </Box>

            <Box
              sx={{
                alignItems: "center",
                display: 'flex',
                justifyContent: "center",
                mt: 4,
                mb: 2,
              }}
            >
              {/* <Button
              variant="outlined"
              color="primary"
              sx={{
                width: "90%",
                color: "#6366F1",
                border: "1px solid #6366F1",
                borderRadius: "10px",
              }}
            >
              Start free Trial
            </Button> */}
              <StripeCheckout
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                }}
                stripeKey={publishableKey}
                label="Paid Now"
                name="Pay With Credit Card"
                billingAddress
                // shippingAddress
                amount={priceForStripe}
                description={`Your total is $${product.price}`}
                token={payNow}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Registered;