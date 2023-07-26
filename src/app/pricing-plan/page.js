"use client";
import { Box, Button, Typography, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import {FcCheckmark} from 'react-icons/fc'

const Registered = () => {
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Plus Jakarta Sans",
          marginBottom:'40px'
        }}
      >
        <Box
          sx={{
            width: "340px",
            borderRadius: "16px",
            marginTop: "30px",
            fontFamily: "Plus Jakarta Sans",
            backgroundColor: "#F9FAFF",
            px: 2,
            py: 2,
            mr: "10px",
          }}
        >
        <Box sx={{width:'24',height:'25px'}}>
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
              lineHeight:'38px'
            }}
          >
            0$
          </Typography>
          <Box sx={{my:'6px'}}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "700",
              fontSize: "18px",
              marginBottom: "2px",
              lineHeight:'22px'
            }}
          >
            Free trial
          </Typography>

          </Box>

        </Box>
        <Box sx={{my:'6px'}}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#6C737F",
            }}
          >
            to familiarize yourself with our tools
          </Typography>

        </Box>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             {/* <FcCheckmark/> */}
              <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (limited)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (limited)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (limited)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (limited)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (limited)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (limited)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
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

        <Box
          sx={{
            width: "340px",
            borderRadius: "16px",
            marginTop: "30px",
            ml: "10px",
            backgroundColor: "#F9FAFF",
            px: 2,
            py: 2,
          }}
        >
          <Box sx={{width:'24',height:'25px'}}>
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
              lineHeight:'38px'
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
              lineHeight:'22px'
            }}
          >
            Standard
          </Typography>

          </Box>


          <Box sx={{my:'6px'}}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#6C737F",
            }}
          >
            to familiarize yourself with our tools
          </Typography>

        </Box>

          <Divider sx={{ my: 2 }} />

          {/* <Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
              <Image
                sx={{}}
                alt="Amplify"
                src="/image/icon.png"
                width={16}
                height={11}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "plus jakarta sans", fontSize: "14", ml: 2 }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
          </Box> */}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "between", my: 1 }}>
             <Box sx={{alignItems:'center'}} >
             <FcCheckmark/>
             </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", ml: 2,fontWeight:400,lineHeight:'22px',color:'#111927' }}
              >
                Access to influencer Analyzer (full)
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

      </Box>
    </Box>
  );
};

export default Registered;
